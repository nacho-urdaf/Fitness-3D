'use client';

import React from 'react';
import { useFitnessStore } from '@/store/useFitnessStore';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Trash2, GripVertical, Calendar } from 'lucide-react';

interface Props {
  isDarkMode?: boolean;
}

export const RoutinePlanner: React.FC<Props> = ({ isDarkMode = false }) => {
  const { routineDays, removeExerciseFromDay, reorderExercisesInDay, setDaysCount } = useFitnessStore();

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const day = routineDays.find((d) => d.dayId === source.droppableId);
      if (!day) return;

      const updatedExercises = Array.from(day.exercises);
      const [moved] = updatedExercises.splice(source.index, 1);
      updatedExercises.splice(destination.index, 0, moved);

      reorderExercisesInDay(day.dayId, updatedExercises);
    }
  };

  return (
    <div className={`rounded-2xl p-5 border transition-colors duration-300 shadow-lg space-y-6 ${
      isDarkMode 
        ? 'bg-slate-900/90 border-slate-800 text-white' 
        : 'bg-white/90 border-slate-200 text-slate-900'
    }`}>
      <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4 ${
        isDarkMode ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <h2 className="text-xl font-black text-emerald-500 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-500" /> Mi Rutina Personalizada
          </h2>
          <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Reordena o elimina los ejercicios agregados a cada día.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Días de entrenamiento:
          </span>
          <select
            value={routineDays.length}
            onChange={(e) => setDaysCount(Number(e.target.value))}
            className={`text-xs rounded-xl px-3 py-1.5 focus:ring-2 focus:ring-emerald-500 outline-none font-bold border ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Día' : 'Días'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {routineDays.map((day) => (
            <div key={day.dayId} className={`border rounded-xl p-4 flex flex-col ${
              isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h3 className={`font-bold text-xs uppercase tracking-wider mb-3 border-b pb-2 ${
                isDarkMode ? 'text-slate-300 border-slate-800' : 'text-slate-700 border-slate-200'
              }`}>
                {day.dayName}
              </h3>

              <Droppable droppableId={day.dayId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex-1 space-y-2 min-h-[110px]"
                  >
                    {day.exercises.length === 0 ? (
                      <div className={`h-full flex items-center justify-center text-[11px] italic py-6 border border-dashed rounded-lg ${
                        isDarkMode ? 'text-slate-500 border-slate-800' : 'text-slate-400 border-slate-200'
                      }`}>
                        Arrastra o agrega ejercicios
                      </div>
                    ) : (
                      day.exercises.map((ex, index) => (
                        <Draggable key={ex.id} draggableId={ex.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className={`p-2.5 rounded-lg border flex items-center justify-between text-xs group transition-all shadow-sm ${
                                isDarkMode 
                                  ? 'bg-slate-800/90 border-slate-700/60 hover:border-emerald-500/50' 
                                  : 'bg-white border-slate-200 hover:border-emerald-500/50'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div {...provided.dragHandleProps} className="text-slate-400 hover:text-slate-600 cursor-grab">
                                  <GripVertical className="w-4 h-4" />
                                </div>
                                <span className="font-medium">{ex.name}</span>
                              </div>
                              <button
                                onClick={() => removeExerciseFromDay(day.dayId, ex.id)}
                                className="text-slate-400 hover:text-red-500 p-1 rounded transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </Draggable>
                      ))
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};