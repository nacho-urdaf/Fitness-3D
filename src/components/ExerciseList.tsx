'use client';

import React, { useState } from 'react';
import { useFitnessStore } from '@/store/useFitnessStore';
import { Exercise } from '@/types/fitness';
import { Plus, Check, ChevronDown, Info, Play, Dumbbell } from 'lucide-react';

interface Props {
  isDarkMode?: boolean;
}

export const ExerciseList: React.FC<Props> = ({ isDarkMode = false }) => {
  const { getFilteredExercises, routineDays, addExerciseToDay } = useFitnessStore();
  const exercises = getFilteredExercises();

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [expandedInfoId, setExpandedInfoId] = useState<string | null>(null);

  const toggleDropdown = (exerciseId: string) => {
    setOpenDropdownId((prev) => (prev === exerciseId ? null : exerciseId));
  };

  const toggleInfo = (exerciseId: string) => {
    setExpandedInfoId((prev) => (prev === exerciseId ? null : exerciseId));
  };

  const handleSelectDay = (dayId: string, exercise: Exercise) => {
    addExerciseToDay(dayId, exercise);
    setOpenDropdownId(null);
  };

  return (
    <div className={`rounded-2xl p-5 border transition-colors duration-300 shadow-lg ${
      isDarkMode 
        ? 'bg-slate-900/90 border-slate-800 text-white' 
        : 'bg-white/90 border-slate-200 text-slate-900'
    }`}>
      <h3 className="text-lg font-bold mb-4">
        Ejercicios Encontrados ({exercises.length})
      </h3>

      {exercises.length === 0 ? (
        <p className={`text-sm py-8 text-center ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          No hay ejercicios que coincidan con los filtros seleccionados.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercises.map((ex) => {
            const isDropdownOpen = openDropdownId === ex.id;
            const isInfoExpanded = expandedInfoId === ex.id;

            return (
              <div
                key={ex.id}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all relative ${
                  isDarkMode
                    ? 'bg-slate-800/80 border-slate-700/60 hover:border-sky-500/50'
                    : 'bg-slate-50/80 border-slate-200 hover:border-sky-500/50'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-semibold text-sm">{ex.name}</h4>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded shrink-0 ${
                      isDarkMode ? 'bg-slate-700 text-sky-400' : 'bg-slate-200 text-sky-600'
                    }`}>
                      {ex.equipment}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleInfo(ex.id)}
                    className="mt-2.5 text-xs text-sky-500 hover:text-sky-400 font-medium flex items-center gap-1 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>{isInfoExpanded ? 'Ocultar técnica' : 'Más información'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isInfoExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isInfoExpanded && (
                    <div className={`mt-3 pt-3 border-t space-y-3 animate-fadeIn ${
                      isDarkMode ? 'border-slate-700/60' : 'border-slate-200'
                    }`}>
                      <div className={`w-full h-36 rounded-xl border overflow-hidden relative flex flex-col items-center justify-center ${
                        isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-200/60 border-slate-300'
                      }`}>
                        {ex.mediaUrl ? (
                          <img src={ex.mediaUrl} alt={ex.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="flex flex-col items-center justify-center p-3 text-center">
                            <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 mb-1.5">
                              <Play className="w-5 h-5 ml-0.5" />
                            </div>
                            <span className={`text-[11px] font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                              Demostración visual
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <h5 className="text-[11px] font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1 text-sky-500">
                          <Dumbbell className="w-3 h-3" /> Cómo ejecutarlo:
                        </h5>
                        {ex.instructions && ex.instructions.length > 0 ? (
                          <ol className={`space-y-1 text-xs list-decimal list-inside pl-1 ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            {ex.instructions.map((ins, i) => (
                              <li key={i} className="leading-relaxed">{ins}</li>
                            ))}
                          </ol>
                        ) : (
                          <p className={`text-xs italic ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                            1. Mantén la postura alineada y controla la fase excéntrica.<br />
                            2. Enfoca la tensión en el grupo muscular durante toda la serie.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className={`mt-4 pt-3 border-t flex items-center justify-between relative ${
                  isDarkMode ? 'border-slate-700/50' : 'border-slate-200'
                }`}>
                  <button
                    onClick={() => toggleDropdown(ex.id)}
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors shadow-sm"
                  >
                    <span className="flex items-center gap-1.5">
                      <Plus className="w-4 h-4" /> Agregar a rutina
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isDropdownOpen && (
                    <div className={`absolute bottom-full mb-2 left-0 right-0 border rounded-xl shadow-2xl z-20 p-2 space-y-1 max-h-48 overflow-y-auto ${
                      isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
                    }`}>
                      <p className={`text-[10px] uppercase font-bold px-2 py-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Selecciona el día:
                      </p>
                      {routineDays.map((day) => {
                        const isAdded = day.exercises.some((e) => e.id === ex.id);
                        return (
                          <button
                            key={day.dayId}
                            onClick={() => handleSelectDay(day.dayId, ex)}
                            disabled={isAdded}
                            className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                              isAdded
                                ? isDarkMode ? 'bg-slate-700/50 text-slate-500 cursor-not-allowed' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                : isDarkMode ? 'text-slate-200 hover:bg-sky-600 hover:text-white' : 'text-slate-700 hover:bg-sky-500 hover:text-white'
                            }`}
                          >
                            <span>{day.dayName}</span>
                            {isAdded && (
                              <span className="text-[10px] text-emerald-500 flex items-center gap-1 font-bold">
                                <Check className="w-3 h-3" /> Agregado
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};