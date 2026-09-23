'use client';

import React from 'react';
import { useFitnessStore } from '@/store/useFitnessStore';
import { MUSCLE_GROUPS } from '@/data/mockData';
import { EquipmentType } from '@/types/fitness';
import { Dumbbell, Activity, Layers, Cpu } from 'lucide-react';

interface Props {
  isDarkMode?: boolean;
}

const EQUIPMENT_OPTIONS: { id: EquipmentType | 'all'; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'Todos', icon: <Layers className="w-4 h-4" /> },
  { id: 'bodyweight', label: 'Sin Equipo', icon: <Activity className="w-4 h-4" /> },
  { id: 'dumbbells', label: 'Mancuernas', icon: <Dumbbell className="w-4 h-4" /> },
  { id: 'bands', label: 'Ligas', icon: <Activity className="w-4 h-4" /> },
  { id: 'machines', label: 'Máquinas', icon: <Cpu className="w-4 h-4" /> },
];

export const SubzoneSelector: React.FC<Props> = ({ isDarkMode = false }) => {
  const { 
    selectedMuscleId, 
    selectedSubzoneId, 
    selectedEquipment, 
    setSelectedSubzone, 
    setSelectedEquipment 
  } = useFitnessStore();

  const currentMuscleGroup = MUSCLE_GROUPS.find((m) => m.id === selectedMuscleId);

  if (!currentMuscleGroup) return null;

  return (
    <div className={`rounded-2xl p-5 border backdrop-blur-md transition-colors duration-300 shadow-lg space-y-6 ${
      isDarkMode 
        ? 'bg-slate-900/90 border-slate-800 text-white' 
        : 'bg-white/90 border-slate-200 text-slate-900'
    }`}>
      <div>
        <span className="text-[10px] uppercase font-extrabold tracking-wider text-sky-500 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
          Grupo Muscular
        </span>
        <h2 className="text-2xl font-black mt-2">{currentMuscleGroup.name}</h2>
        <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          Aísla una cabeza o subzona muscular específica:
        </p>
      </div>

      {/* Subzonas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <button
          onClick={() => setSelectedSubzone(null)}
          className={`p-3 rounded-xl text-left text-xs font-semibold transition-all ${
            selectedSubzoneId === null
              ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20 ring-2 ring-sky-400'
              : isDarkMode
              ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
          }`}
        >
          Todo {currentMuscleGroup.name}
        </button>

        {currentMuscleGroup.subzones.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setSelectedSubzone(sub.id)}
            className={`p-3 rounded-xl text-left transition-all ${
              selectedSubzoneId === sub.id
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20 ring-2 ring-sky-400'
                : isDarkMode
                ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <div className="text-xs font-semibold">{sub.name}</div>
            {sub.description && (
              <div className={`text-[10px] mt-1 line-clamp-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {sub.description}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Filtro por Equipamiento */}
      <div>
        <h3 className={`text-[11px] font-bold uppercase tracking-wider mb-3 ${
          isDarkMode ? 'text-slate-400' : 'text-slate-500'
        }`}>
          Equipamiento
        </h3>
        <div className="flex flex-wrap gap-2">
          {EQUIPMENT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedEquipment(opt.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedEquipment === opt.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20 font-bold'
                  : isDarkMode
                  ? 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-700/50'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {opt.icon}
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};