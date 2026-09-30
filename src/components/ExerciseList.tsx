'use client';

import React, { useState } from 'react';
import { useFitnessStore } from '@/store/useFitnessStore';
import { MOCK_EXERCISES } from '@/data/mockData';
import { Exercise } from '@/types/fitness';
import { Dumbbell, Plus, Check, Filter } from 'lucide-react';

interface Props {
  isDarkMode?: boolean;
}

export const ExerciseList: React.FC<Props> = ({ isDarkMode = true }) => {
  const {
    selectedMuscleId,
    selectedSubzoneId,
    selectedEquipment,
    routineDays = [],
    addExerciseToDay,
  } = useFitnessStore();

  const [selectedDayForExercise, setSelectedDayForExercise] = useState<string>('');
  const [addedSuccessId, setAddedSuccessId] = useState<string | null>(null);

  const filteredExercises = MOCK_EXERCISES.filter((exercise) => {
    const exAny = exercise as any;

    const matchesMuscle = selectedMuscleId
      ? exAny.primaryMuscle === selectedMuscleId ||
        exAny.muscleGroupId === selectedMuscleId ||
        exAny.muscleId === selectedMuscleId
      : true;

    const matchesSubzone = selectedSubzoneId
      ? exAny.subzoneId === selectedSubzoneId
      : true;

    const matchesEquipment =
      selectedEquipment === 'all' || !selectedEquipment
        ? true
        : exAny.equipment?.toLowerCase() === selectedEquipment.toLowerCase();

    return matchesMuscle && matchesSubzone && matchesEquipment;
  });

  const handleAddExercise = (exercise: Exercise, targetDayId?: string) => {
    const dayToUse = targetDayId || selectedDayForExercise || routineDays[0]?.dayId;
    if (!dayToUse) return;

    addExerciseToDay(dayToUse, exercise);

    setAddedSuccessId(exercise.id);
    setTimeout(() => {
      setAddedSuccessId(null);
    }, 1200);
  };

  return (
    <div className="border border-zinc-800/80 rounded-2xl p-4 sm:p-5 shadow-xl bg-zinc-900/90 text-white space-y-4">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-lime-400" />
            <h2 className="text-base font-black tracking-tight text-white">
              Catálogo de Ejercicios
            </h2>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">
            Filtrados según la zona seleccionada en el cuerpo.
          </p>
        </div>

        {routineDays.length > 0 && (
          <div className="flex items-center gap-2 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800">
            <span className="text-[10px] font-black uppercase text-zinc-400 px-1">
              Agregar a:
            </span>
            <select
              value={selectedDayForExercise || routineDays[0]?.dayId || ''}
              onChange={(e) => setSelectedDayForExercise(e.target.value)}
              className="bg-zinc-900 text-xs font-bold text-lime-400 border border-zinc-700 rounded-lg px-2.5 py-1 outline-none shadow-sm"
            >
              {routineDays.map((day, idx) => (
                <option
                  key={`${day.dayId}-${idx}`}
                  value={day.dayId}
                  className="bg-zinc-900 text-white font-bold"
                >
                  {day.dayName || `DÍA ${idx + 1}`}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Lista de Ejercicios */}
      {filteredExercises.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-zinc-800 rounded-2xl space-y-2">
          <Filter className="w-8 h-8 text-zinc-600 mx-auto" />
          <p className="text-xs font-semibold text-zinc-400">
            No hay ejercicios registrados para este filtro o músculo.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin">
          {filteredExercises.map((exercise) => {
            const exAny = exercise as any;
            const isAdded = addedSuccessId === exercise.id;
            const descriptionText =
              exAny.description ||
              (exAny.instructions && exAny.instructions[0]) ||
              'Ejercicio enfocado para desarrollo muscular.';

            return (
              <div
                key={exercise.id}
                className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/70 hover:border-lime-400/50 transition-all flex flex-col justify-between gap-3 group shadow-sm"
              >
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold text-xs text-white leading-snug group-hover:text-lime-400 transition-colors">
                      {exercise.name}
                    </h3>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-lime-500/10 text-lime-400 border border-lime-500/20 shrink-0">
                      {exercise.equipment}
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-tight">
                    {descriptionText}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
                  <span className="text-[10px] font-bold text-zinc-500 capitalize">
                    {exAny.muscleGroupId || exAny.primaryMuscle || 'Ejercicio'}
                  </span>

                  <button
                    onClick={() => handleAddExercise(exercise)}
                    disabled={isAdded}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all active:scale-95 shadow-sm ${
                      isAdded
                        ? 'bg-emerald-500 text-zinc-950'
                        : 'bg-lime-400 text-zinc-950 hover:bg-lime-300 shadow-lime-500/20'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>¡Agregado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Agregar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};