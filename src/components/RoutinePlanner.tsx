'use client';

import React, { useState } from 'react';
import { useFitnessStore } from '@/store/useFitnessStore';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import {
  Calendar,
  Trash2,
  Edit3,
  Plus,
  Minus,
  GripVertical,
  Check,
  ChevronDown,
  ChevronUp,
  Video,
  PlayCircle,
  Maximize2,
  X,
  RotateCcw,
  Trophy,
  BarChart2,
} from 'lucide-react';

interface Props {
  isDarkMode?: boolean;
}

export const RoutinePlanner: React.FC<Props> = ({ isDarkMode = true }) => {
  const {
    routineDays = [],
    setDaysCount,
    removeExerciseFromDay,
    addExerciseToDay,
    removeDay,
    clearAllRoutine,
  } = useFitnessStore();

  const [editingDayId, setEditingDayId] = useState<string | null>(null);
  const [expandedExerciseKey, setExpandedExerciseKey] = useState<string | null>(null);
  const [modalDayId, setModalDayId] = useState<string | null>(null);

  const [customDayNames, setCustomDayNames] = useState<Record<string, string>>({
    'day-1': 'LUNES',
    'day-2': 'MARTES',
    'day-3': 'MIÉRCOLES',
  });

  const [exerciseStats, setExerciseStats] = useState<
    Record<string, { sets: number; reps: number }>
  >({});

  const [actualReps, setActualReps] = useState<Record<string, number>>({});
  const [completedSets, setCompletedSets] = useState<Record<string, boolean>>({});
  const [finishedDayId, setFinishedDayId] = useState<string | null>(null);

  const daysList = routineDays || [];

  const handleRenameDay = (dayId: string, newName: string) => {
    setCustomDayNames((prev) => ({
      ...prev,
      [dayId]: newName,
    }));
  };

  const handleAddDay = () => {
    const newCount = daysList.length + 1;
    setDaysCount(newCount);
  };

  const handleDeleteDay = (dayId: string) => {
    if (daysList.length <= 1) return;
    removeDay(dayId);
  };

  const updateStats = (exerciseKey: string, field: 'sets' | 'reps', value: number) => {
    setExerciseStats((prev) => ({
      ...prev,
      [exerciseKey]: {
        sets: field === 'sets' ? value : prev[exerciseKey]?.sets || 3,
        reps: field === 'reps' ? value : prev[exerciseKey]?.reps || 10,
      },
    }));
  };

  const adjustActualReps = (setKey: string, delta: number, defaultReps: number) => {
    const current = actualReps[setKey] ?? defaultReps;
    const updated = Math.max(1, current + delta);
    setActualReps((prev) => ({
      ...prev,
      [setKey]: updated,
    }));
  };

  const toggleExpandExercise = (key: string) => {
    setExpandedExerciseKey((prev) => (prev === key ? null : key));
  };

  const toggleSetCompletion = (
    dayId: string,
    exerciseKey: string,
    setIndex: number
  ) => {
    const setKey = `${exerciseKey}-set-${setIndex}`;
    const newCompleted = {
      ...completedSets,
      [setKey]: !completedSets[setKey],
    };
    setCompletedSets(newCompleted);

    const currentDay = daysList.find((d) => d.dayId === dayId);
    if (!currentDay || currentDay.exercises.length === 0) return;

    let allCompleted = true;
    currentDay.exercises.forEach((ex, exIdx) => {
      const exKey = `${dayId}-${ex.id}-${exIdx}`;
      const totalS = exerciseStats[exKey]?.sets || 3;
      for (let s = 0; s < totalS; s++) {
        const sKey = `${exKey}-set-${s}`;
        if (!newCompleted[sKey]) {
          allCompleted = false;
        }
      }
    });

    if (allCompleted) {
      setFinishedDayId(dayId);
    }
  };

  const handleKeepRoutineForNextWeek = () => {
    if (!finishedDayId) return;
    const currentDay = daysList.find((d) => d.dayId === finishedDayId);
    if (currentDay) {
      const newCompleted = { ...completedSets };
      currentDay.exercises.forEach((ex, idx) => {
        const exKey = `${finishedDayId}-${ex.id}-${idx}`;
        const totalS = exerciseStats[exKey]?.sets || 3;
        for (let s = 0; s < totalS; s++) {
          delete newCompleted[`${exKey}-set-${s}`];
        }
      });
      setCompletedSets(newCompleted);
    }
    setFinishedDayId(null);
  };

  const handleChangeRoutineForDay = () => {
    if (!finishedDayId) return;
    const currentDay = daysList.find((d) => d.dayId === finishedDayId);
    if (currentDay) {
      [...currentDay.exercises].forEach((ex) => {
        removeExerciseFromDay(finishedDayId, ex.id);
      });
    }
    setFinishedDayId(null);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceDay = daysList.find((d) => d.dayId === source.droppableId);
    const destDay = daysList.find((d) => d.dayId === destination.droppableId);

    if (!sourceDay || !destDay) return;

    const movedExercise = sourceDay.exercises[source.index];
    if (!movedExercise) return;

    removeExerciseFromDay(sourceDay.dayId, movedExercise.id);
    addExerciseToDay(destDay.dayId, movedExercise);
  };

  const activeModalDay = daysList.find((d) => d.dayId === modalDayId);
  const activeFinishedDay = daysList.find((d) => d.dayId === finishedDayId);

  const finishedDayStats = React.useMemo(() => {
    if (!activeFinishedDay) return { totalSets: 0, totalReps: 0, muscleBreakdown: {} };

    let totalSets = 0;
    let totalReps = 0;
    const muscleBreakdown: Record<string, number> = {};

    activeFinishedDay.exercises.forEach((ex, idx) => {
      const exKey = `${activeFinishedDay.dayId}-${ex.id}-${idx}`;
      const targetSets = exerciseStats[exKey]?.sets || 3;
      const targetReps = exerciseStats[exKey]?.reps || 10;

      totalSets += targetSets;

      for (let s = 0; s < targetSets; s++) {
        const setKey = `${exKey}-set-${s}`;
        const repsDone = actualReps[setKey] ?? targetReps;
        totalReps += repsDone;
      }

      const group = ex.muscleGroupId || 'Otros';
      muscleBreakdown[group] = (muscleBreakdown[group] || 0) + targetSets;
    });

    return { totalSets, totalReps, muscleBreakdown };
  }, [activeFinishedDay, exerciseStats, actualReps]);

  return (
    <div className="border border-zinc-800/80 rounded-2xl p-4 sm:p-5 shadow-xl bg-zinc-900/90 text-white space-y-4">
      {/* Encabezado Principal */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-lime-400" />
            <h2 className="text-base font-black tracking-tight text-white">
              Mi Rutina Personalizada
            </h2>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">
            Despliega un ejercicio para abrir su modo de entrenamiento y marcar series.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (confirm('¿Estás seguro de que deseas vaciar todos los ejercicios de la rutina?')) {
                clearAllRoutine();
                setCompletedSets({});
                setActualReps({});
              }
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-zinc-300 hover:text-rose-400 bg-zinc-800 hover:bg-rose-500/10 border border-zinc-700 transition shadow-sm"
            title="Vaciar ejercicios de la rutina"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpiar</span>
          </button>

          <button
            onClick={handleAddDay}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black bg-lime-400 text-zinc-950 hover:bg-lime-300 transition shadow-md shadow-lime-500/20 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Añadir Día</span>
          </button>
        </div>
      </div>

      {/* Grid Kanban por Día */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin">
          {daysList.map((day, dayIdx) => {
            const isEditing = editingDayId === day.dayId;
            const dayTitle = customDayNames[day.dayId] || day.dayName;

            return (
              <div
                key={`${day.dayId}-${dayIdx}`}
                className="p-3.5 rounded-2xl border-2 flex flex-col min-w-[285px] sm:min-w-[310px] snap-center shrink-0 lg:shrink shadow-sm transition-all bg-zinc-950/80 border-zinc-800 hover:border-lime-500/50"
              >
                {/* Cabecera del Día */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b-2 border-zinc-800">
                  {isEditing ? (
                    <div className="flex items-center gap-1.5 w-full">
                      <input
                        type="text"
                        value={dayTitle}
                        onChange={(e) => handleRenameDay(day.dayId, e.target.value)}
                        className="bg-zinc-900 border-2 border-lime-400 text-xs font-black rounded-lg px-2 py-1 outline-none text-lime-400 w-full uppercase"
                        autoFocus
                      />
                      <button
                        onClick={() => setEditingDayId(null)}
                        className="p-1.5 rounded-lg bg-lime-400 text-zinc-950 hover:bg-lime-300 shrink-0"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-black text-xs uppercase tracking-wider text-lime-400">
                          {dayTitle}
                        </h3>
                        <button
                          onClick={() => setEditingDayId(day.dayId)}
                          className="text-zinc-500 hover:text-lime-400 transition p-0.5"
                          title="Editar nombre del día"
                        >
                          <Edit3 className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setModalDayId(day.dayId)}
                          className="p-1 text-zinc-500 hover:text-lime-400 transition rounded-md hover:bg-lime-500/10"
                          title="Abrir vista enfocada"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>

                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/20">
                          {day.exercises.length}
                        </span>

                        {daysList.length > 1 && (
                          <button
                            onClick={() => handleDeleteDay(day.dayId)}
                            className="text-zinc-500 hover:text-rose-400 transition p-1 rounded-md hover:bg-rose-500/10"
                            title="Eliminar este día"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Lista de ejercicios */}
                <Droppable droppableId={day.dayId}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`flex-1 max-h-[440px] overflow-y-auto pr-1 space-y-2.5 scrollbar-thin transition-colors ${
                        snapshot.isDraggingOver
                          ? 'bg-lime-500/10 border-2 border-dashed border-lime-400 rounded-xl'
                          : ''
                      }`}
                    >
                      {day.exercises.length === 0 ? (
                        <div className="h-32 flex items-center justify-center text-center p-4 text-[11px] font-semibold text-zinc-500 italic">
                          Arrastra o agrega ejercicios
                        </div>
                      ) : (
                        day.exercises.map((exercise, index) => {
                          const exerciseKey = `${day.dayId}-${exercise.id}-${index}`;
                          const targetSets = exerciseStats[exerciseKey]?.sets || 3;
                          const targetReps = exerciseStats[exerciseKey]?.reps || 10;
                          const isExpanded = expandedExerciseKey === exerciseKey;

                          return (
                            <Draggable
                              key={exerciseKey}
                              draggableId={exerciseKey}
                              index={index}
                            >
                              {(providedDraggable, snapshotDraggable) => (
                                <div
                                  ref={providedDraggable.innerRef}
                                  {...providedDraggable.draggableProps}
                                  className={`p-3 rounded-xl border transition-all space-y-2.5 ${
                                    snapshotDraggable.isDragging
                                      ? 'bg-lime-400 text-zinc-950 shadow-2xl scale-105 z-50'
                                      : 'bg-zinc-900 border-zinc-800/90 text-white'
                                  }`}
                                >
                                  {/* Encabezado del Ejercicio */}
                                  <div className="flex items-start justify-between gap-1.5">
                                    <div className="flex items-center gap-1.5 min-w-0">
                                      <div
                                        {...providedDraggable.dragHandleProps}
                                        className="cursor-grab active:cursor-grabbing text-zinc-500 hover:text-lime-400 p-0.5"
                                      >
                                        <GripVertical className="w-4 h-4 shrink-0" />
                                      </div>
                                      <div>
                                        <h4 className="text-xs font-black text-white leading-tight">
                                          {exercise.name}
                                        </h4>
                                        <button
                                          onClick={() => toggleExpandExercise(exerciseKey)}
                                          className="mt-0.5 flex items-center gap-1 text-[10px] font-bold text-lime-400 hover:text-lime-300 transition"
                                        >
                                          <span>
                                            {isExpanded ? 'Ocultar guía' : 'Agrandar / Marcar series'}
                                          </span>
                                          {isExpanded ? (
                                            <ChevronUp className="w-3 h-3" />
                                          ) : (
                                            <ChevronDown className="w-3 h-3" />
                                          )}
                                        </button>
                                      </div>
                                    </div>

                                    <button
                                      onClick={() =>
                                        removeExerciseFromDay(day.dayId, exercise.id)
                                      }
                                      className="text-zinc-500 hover:text-rose-400 p-1 rounded transition shrink-0"
                                      title="Eliminar de este día"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>

                                  {!isExpanded && (
                                    <div className="flex items-center justify-between gap-2 pt-1 border-t border-zinc-800">
                                      <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-lime-500/10 text-lime-400 border border-lime-500/20">
                                        {exercise.equipment}
                                      </span>
                                      <span className="text-[10px] font-bold text-zinc-400">
                                        {targetSets} series x {targetReps} reps
                                      </span>
                                    </div>
                                  )}

                                  {isExpanded && (
                                    <div className="pt-2 border-t border-zinc-800 space-y-3">
                                      <div className="relative w-full h-28 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 overflow-hidden">
                                        <div className="flex flex-col items-center gap-1 text-zinc-400">
                                          <PlayCircle className="w-6 h-6 text-lime-400 animate-pulse" />
                                          <span className="text-[9px] font-semibold">Demo Técnica</span>
                                        </div>
                                        <div className="absolute top-1.5 right-1.5 flex items-center gap-1 bg-black/60 text-[8px] font-bold text-white px-1.5 py-0.5 rounded-full">
                                          <Video className="w-2.5 h-2.5 text-lime-400" />
                                          <span>3D</span>
                                        </div>
                                      </div>

                                      <div className="flex items-center justify-between gap-2 bg-zinc-950 p-2 rounded-lg border border-zinc-800">
                                        <span className="text-[10px] font-bold text-zinc-400">
                                          Ajustar meta:
                                        </span>
                                        <div className="flex items-center gap-2">
                                          <div className="flex items-center gap-1">
                                            <span className="text-[10px] font-black text-lime-400">
                                              Series:
                                            </span>
                                            <input
                                              type="number"
                                              min={1}
                                              max={20}
                                              value={targetSets}
                                              onChange={(e) =>
                                                updateStats(
                                                  exerciseKey,
                                                  'sets',
                                                  parseInt(e.target.value) || 1
                                                )
                                              }
                                              className="w-8 text-center text-[10px] font-black bg-zinc-900 text-lime-400 border border-zinc-700 rounded py-0.5 outline-none shadow-sm"
                                            />
                                          </div>

                                          <div className="flex items-center gap-1">
                                            <span className="text-[10px] font-black text-lime-400">
                                              Reps:
                                            </span>
                                            <input
                                              type="number"
                                              min={1}
                                              max={100}
                                              value={targetReps}
                                              onChange={(e) =>
                                                updateStats(
                                                  exerciseKey,
                                                  'reps',
                                                  parseInt(e.target.value) || 1
                                                )
                                              }
                                              className="w-9 text-center text-[10px] font-black bg-zinc-900 text-lime-400 border border-zinc-700 rounded py-0.5 outline-none shadow-sm"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-1.5">
                                        <span className="text-[9px] font-extrabold uppercase text-zinc-400 block">
                                          Marcar series hechas:
                                        </span>
                                        <div className="space-y-1.5">
                                          {Array.from({ length: targetSets }).map((_, setIdx) => {
                                            const setKey = `${exerciseKey}-set-${setIdx}`;
                                            const isDone = !!completedSets[setKey];
                                            const repsDone = actualReps[setKey] ?? targetReps;

                                            return (
                                              <div
                                                key={setIdx}
                                                className={`flex items-center justify-between p-1.5 rounded-lg border transition-all ${
                                                  isDone
                                                    ? 'bg-emerald-500/10 border-emerald-500/30'
                                                    : 'bg-zinc-950 border-zinc-800'
                                                }`}
                                              >
                                                <div className="flex items-center gap-1.5">
                                                  <span className="text-[10px] font-black text-zinc-400">
                                                    S{setIdx + 1}:
                                                  </span>
                                                  <div className="flex items-center gap-1 bg-zinc-900 px-1 py-0.5 rounded border border-zinc-700">
                                                    <button
                                                      onClick={() =>
                                                        adjustActualReps(setKey, -1, targetReps)
                                                      }
                                                      className="p-0.5 text-zinc-400 hover:text-lime-400"
                                                    >
                                                      <Minus className="w-2.5 h-2.5" />
                                                    </button>
                                                    <span className="text-[10px] font-black text-lime-400 w-5 text-center">
                                                      {repsDone}
                                                    </span>
                                                    <button
                                                      onClick={() =>
                                                        adjustActualReps(setKey, 1, targetReps)
                                                      }
                                                      className="p-0.5 text-zinc-400 hover:text-lime-400"
                                                    >
                                                      <Plus className="w-2.5 h-2.5" />
                                                    </button>
                                                  </div>
                                                  <span className="text-[9px] text-zinc-500">reps</span>
                                                </div>

                                                <button
                                                  onClick={() =>
                                                    toggleSetCompletion(
                                                      day.dayId,
                                                      exerciseKey,
                                                      setIdx
                                                    )
                                                  }
                                                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-extrabold transition-all active:scale-95 ${
                                                    isDone
                                                      ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                                                      : 'bg-lime-400 text-zinc-950 hover:bg-lime-300'
                                                  }`}
                                                >
                                                  {isDone ? (
                                                    <>
                                                      <Check className="w-3 h-3" />
                                                      <span>Hecha</span>
                                                    </>
                                                  ) : (
                                                    <span>Completar</span>
                                                  )}
                                                </button>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </Draggable>
                          );
                        })
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>

      {/* Modal Enfocado por Día */}
      {modalDayId && activeModalDay && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <h2 className="text-base font-black text-lime-400 uppercase tracking-wider">
                {customDayNames[activeModalDay.dayId] || activeModalDay.dayName} ({activeModalDay.exercises.length} Ejercicios)
              </h2>
              <button
                onClick={() => setModalDayId(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
              {activeModalDay.exercises.length === 0 ? (
                <p className="text-center text-xs text-zinc-500 italic py-8">
                  Este día no contiene ejercicios aún.
                </p>
              ) : (
                activeModalDay.exercises.map((ex, idx) => (
                  <div
                    key={`modal-${ex.id}-${idx}`}
                    className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-black text-xs text-lime-400">{idx + 1}.</span>
                      <h4 className="font-bold text-xs text-white">{ex.name}</h4>
                    </div>
                    <button
                      onClick={() => removeExerciseFromDay(activeModalDay.dayId, ex.id)}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pantalla de Felicitación */}
      {finishedDayId && activeFinishedDay && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 space-y-6 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-500" />

            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center animate-bounce">
              <Trophy className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl font-black text-white tracking-tight">
                ¡Entrenamiento Completado! 🎉
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Finalizaste todas las series de{' '}
                <strong className="text-lime-400">
                  {customDayNames[activeFinishedDay.dayId] || activeFinishedDay.dayName}
                </strong>
              </p>
            </div>

            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-3 text-left">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-800 text-white font-black text-xs">
                <BarChart2 className="w-4 h-4 text-lime-400" />
                <span>Resumen Exacto de la Sesión</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-[9px] font-black uppercase text-zinc-400 block">Series Hechas</span>
                  <span className="text-base font-black text-lime-400">
                    {finishedDayStats.totalSets}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-[9px] font-black uppercase text-zinc-400 block">Reps Totales</span>
                  <span className="text-base font-black text-emerald-400">
                    {finishedDayStats.totalReps}
                  </span>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-extrabold uppercase text-zinc-400 block">
                  Volumen por Músculo Trabado:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {Object.entries(finishedDayStats.muscleBreakdown).map(([muscle, sets]) => (
                    <span
                      key={muscle}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-lime-500/10 text-lime-400 border border-lime-500/20 capitalize"
                    >
                      {muscle}: {sets} series
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleKeepRoutineForNextWeek}
                className="w-full py-3 px-4 rounded-xl text-xs font-black bg-lime-400 text-zinc-950 hover:bg-lime-300 transition shadow-lg shadow-lime-500/20 active:scale-95"
              >
                Guardar rutina para siguiente semana
              </button>

              <button
                onClick={handleChangeRoutineForDay}
                className="w-full py-3 px-4 rounded-xl text-xs font-black bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/20 transition"
              >
                Cambiar / Limpiar Rutina del Día
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};