'use client';

import React, { useState } from 'react';
import { useFitnessStore } from '@/store/useFitnessStore';

interface Props {
  isDarkMode?: boolean;
}

export const AnatomicalBodySVG: React.FC<Props> = ({ isDarkMode = true }) => {
  const { selectedMuscleId, selectedSubzoneId, setSelectedMuscleId, setSelectedSubzoneId } =
    useFitnessStore();

  const [hoveredMuscleId, setHoveredMuscleId] = useState<string | null>(null);

  const handleMuscleClick = (muscleId: string) => {
    setSelectedMuscleId(muscleId);
    setSelectedSubzoneId(null);
  };

  const getMuscleColor = (muscleId: string) => {
    const isSelected = selectedMuscleId === muscleId;
    const isHovered = hoveredMuscleId === muscleId;

    if (isSelected) return '#84cc16'; // Verde Neón / Lima Brillante
    if (isHovered) return '#a3e635'; // Hover verde neón claro
    return '#27272a'; // Zinc oscuro sofisticado
  };

  const commonProps = (muscleId: string, name: string) => ({
    onClick: () => handleMuscleClick(muscleId),
    onMouseEnter: () => setHoveredMuscleId(muscleId),
    onMouseLeave: () => setHoveredMuscleId(null),
    className: 'cursor-pointer transition-colors duration-200 stroke-zinc-800 stroke-[1.5]',
    fill: getMuscleColor(muscleId),
  });

  return (
    <div className="relative w-full border border-zinc-800/80 rounded-2xl p-4 bg-zinc-900/90 text-white shadow-xl space-y-4">
      {/* Cabecera */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div>
          <h2 className="text-sm font-black text-white uppercase tracking-wider">
            Mapa Corporal Interactivo
          </h2>
          <p className="text-[11px] text-zinc-400">
            Toca cualquier músculo para filtrar los ejercicios
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedMuscleId('chest');
            setSelectedSubzoneId(null);
          }}
          className="px-3 py-1.5 text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl transition border border-zinc-700"
        >
          Resetear
        </button>
      </div>

      {/* Contenedor de Vista Doble 2D (Frontal y Trasera) */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto items-center">
        {/* VISTA FRONTAL */}
        <div className="flex flex-col items-center space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-500/10 px-2.5 py-0.5 rounded-full border border-lime-500/20">
            Frontal
          </span>

          <svg viewBox="0 0 200 400" className="w-full h-auto max-h-[360px] drop-shadow-md">
            {/* Cabeza / Cuello */}
            <circle cx="100" cy="35" r="18" className="fill-zinc-700" />
            <rect x="94" y="52" width="12" height="12" rx="2" className="fill-zinc-700" />

            {/* Trapecios */}
            <path d="M82,56 Q100,62 118,56 L124,68 L76,68 Z" {...commonProps('back', 'Trapecio')} />

            {/* Hombros */}
            <path d="M62,68 Q75,68 76,82 L60,98 Q52,82 62,68 Z" {...commonProps('shoulders', 'Hombro Izq')} />
            <path d="M138,68 Q125,68 124,82 L140,98 Q148,82 138,68 Z" {...commonProps('shoulders', 'Hombro Der')} />

            {/* Pecho */}
            <path d="M77,70 Q100,74 100,94 Q80,102 75,90 Z" {...commonProps('chest', 'Pecho Izq')} />
            <path d="M123,70 Q100,74 100,94 Q120,102 125,90 Z" {...commonProps('chest', 'Pecho Der')} />

            {/* Bíceps */}
            <path d="M58,100 Q68,100 68,124 Q56,124 56,108 Z" {...commonProps('biceps', 'Bíceps Izq')} />
            <path d="M142,100 Q132,100 132,124 Q144,124 144,108 Z" {...commonProps('biceps', 'Bíceps Der')} />

            {/* Antebrazos */}
            <path d="M55,128 Q67,128 62,158 Q52,158 52,136 Z" {...commonProps('forearm', 'Antebrazo Izq')} />
            <path d="M145,128 Q133,128 138,158 Q148,158 148,136 Z" {...commonProps('forearm', 'Antebrazo Der')} />

            {/* Manos */}
            <circle cx="56" cy="168" r="6" className="fill-zinc-700" />
            <circle cx="144" cy="168" r="6" className="fill-zinc-700" />

            {/* Abdomen */}
            <path d="M78,96 Q100,98 122,96 L118,148 Q100,154 82,148 Z" {...commonProps('abs', 'Abdomen')} />

            {/* Cuádriceps */}
            <path d="M78,156 Q98,156 96,220 Q80,224 74,200 Z" {...commonProps('quadriceps', 'Cuádriceps Izq')} />
            <path d="M122,156 Q102,156 104,220 Q120,224 126,200 Z" {...commonProps('quadriceps', 'Cuádriceps Der')} />

            {/* Rodillas */}
            <circle cx="85" cy="230" r="7" className="fill-zinc-700" />
            <circle cx="115" cy="230" r="7" className="fill-zinc-700" />

            {/* Pantorrillas */}
            <path d="M78,240 Q94,240 90,290 Q80,292 76,270 Z" {...commonProps('calves', 'Pantorrilla Izq')} />
            <path d="M122,240 Q106,240 110,290 Q120,292 124,270 Z" {...commonProps('calves', 'Pantorrilla Der')} />

            {/* Pies */}
            <ellipse cx="82" cy="302" rx="7" ry="5" className="fill-zinc-700" />
            <ellipse cx="118" cy="302" rx="7" ry="5" className="fill-zinc-700" />
          </svg>
        </div>

        {/* VISTA TRASERA */}
        <div className="flex flex-col items-center space-y-2 border-l border-zinc-800 pl-4">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-500/10 px-2.5 py-0.5 rounded-full border border-lime-500/20">
            Trasera
          </span>

          <svg viewBox="0 0 200 400" className="w-full h-auto max-h-[360px] drop-shadow-md">
            {/* Cabeza / Cuello Posterior */}
            <circle cx="100" cy="35" r="18" className="fill-zinc-700" />
            <rect x="94" y="52" width="12" height="12" rx="2" className="fill-zinc-700" />

            {/* Espalda Alta */}
            <path d="M76,66 Q100,58 124,66 L128,94 Q100,100 72,94 Z" {...commonProps('back', 'Espalda Alta')} />

            {/* Hombros */}
            <path d="M62,68 Q75,68 76,82 L60,98 Q52,82 62,68 Z" {...commonProps('shoulders', 'Hombro Izq')} />
            <path d="M138,68 Q125,68 124,82 L140,98 Q148,82 138,68 Z" {...commonProps('shoulders', 'Hombro Der')} />

            {/* Tríceps */}
            <path d="M56,100 Q68,100 68,124 Q56,124 56,108 Z" {...commonProps('triceps', 'Tríceps Izq')} />
            <path d="M144,100 Q132,100 132,124 Q144,124 144,108 Z" {...commonProps('triceps', 'Tríceps Der')} />

            {/* Antebrazos */}
            <path d="M55,128 Q67,128 62,158 Q52,158 52,136 Z" {...commonProps('forearm', 'Antebrazo Izq')} />
            <path d="M145,128 Q133,128 138,158 Q148,158 148,136 Z" {...commonProps('forearm', 'Antebrazo Der')} />

            {/* Espalda Baja */}
            <path d="M74,96 Q100,100 126,96 L122,142 Q100,146 78,142 Z" {...commonProps('back', 'Espalda Baja')} />

            {/* Glúteos */}
            <path d="M76,144 Q100,146 100,172 Q82,182 72,168 Z" {...commonProps('glutes', 'Glúteo Izq')} />
            <path d="M124,144 Q100,146 100,172 Q118,182 128,168 Z" {...commonProps('glutes', 'Glúteo Der')} />

            {/* Isquiotibiales */}
            <path d="M74,174 Q98,176 96,224 Q80,226 74,204 Z" {...commonProps('hamstrings', 'Isquiotibial Izq')} />
            <path d="M126,174 Q102,176 104,224 Q120,226 126,204 Z" {...commonProps('hamstrings', 'Isquiotibial Der')} />

            {/* Pantorrillas */}
            <path d="M76,232 Q94,232 90,288 Q80,290 74,268 Z" {...commonProps('calves', 'Gemelo Izq')} />
            <path d="M124,232 Q106,232 110,288 Q120,290 126,268 Z" {...commonProps('calves', 'Gemelo Der')} />

            {/* Pies */}
            <ellipse cx="82" cy="298" rx="7" ry="5" className="fill-zinc-700" />
            <ellipse cx="118" cy="298" rx="7" ry="5" className="fill-zinc-700" />
          </svg>
        </div>
      </div>
    </div>
  );
};