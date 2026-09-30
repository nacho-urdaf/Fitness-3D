'use client';

import React from 'react';
import { useFitnessStore } from '@/store/useFitnessStore';
import { Layers, Filter } from 'lucide-react';

interface Props {
  isDarkMode?: boolean;
}

// Mapa interno de subzonas por grupo muscular para evitar errores de importación
const LOCAL_SUBZONES: Record<string, { id: string; name: string }[]> = {
  chest: [
    { id: 'chest-upper', name: 'Pectoral Superior (Clavicular)' },
    { id: 'chest-mid', name: 'Pectoral Medio (Esternal)' },
    { id: 'chest-lower', name: 'Pectoral Inferior' },
  ],
  back: [
    { id: 'lats', name: 'Dorsal Ancho' },
    { id: 'rhomboids-traps', name: 'Trapecio y Romboides' },
    { id: 'lower-back', name: 'Espalda Baja / Lumbar' },
  ],
  shoulders: [
    { id: 'deltoid-anterior', name: 'Deltoides Anterior (Frontal)' },
    { id: 'deltoid-lateral', name: 'Deltoides Lateral' },
    { id: 'deltoid-posterior', name: 'Deltoides Posterior (Posterior)' },
  ],
  biceps: [
    { id: 'biceps-long-head', name: 'Cabeza Larga' },
    { id: 'biceps-short-head', name: 'Cabeza Corta' },
    { id: 'brachialis', name: 'Braquial' },
  ],
  triceps: [
    { id: 'triceps-long-head', name: 'Cabeza Larga' },
    { id: 'triceps-lateral-head', name: 'Cabeza Lateral' },
    { id: 'triceps-medial-head', name: 'Cabeza Medial' },
  ],
  abs: [
    { id: 'abs-upper', name: 'Abdominales Superiores' },
    { id: 'abs-lower', name: 'Abdominales Inferiores' },
    { id: 'obliques', name: 'Oblicuos' },
  ],
  quadriceps: [
    { id: 'rectus-femoris', name: 'Recto Femoral' },
    { id: 'vastus-lateralis', name: 'Vasto Lateral' },
    { id: 'vastus-medialis', name: 'Vasto Medial' },
  ],
  hamstrings: [
    { id: 'biceps-femoris', name: 'Bíceps Femoral' },
    { id: 'semitendinosus', name: 'Semitendinoso' },
  ],
  glutes: [
    { id: 'gluteus-maximus', name: 'Glúteo Mayor' },
    { id: 'gluteus-medius', name: 'Glúteo Medio' },
  ],
  calves: [
    { id: 'gastrocnemius', name: 'Gemelos (Gastrocnemio)' },
    { id: 'soleus', name: 'Sóleo' },
  ],
  forearm: [
    { id: 'flexors', name: 'Flexores de Muñeca' },
    { id: 'extensors', name: 'Extensores de Muñeca' },
  ],
};

export const SubzoneSelector: React.FC<Props> = ({ isDarkMode = true }) => {
  const {
    selectedMuscleId,
    selectedSubzoneId,
    selectedEquipment,
    setSelectedSubzoneId,
    setSelectedEquipment,
  } = useFitnessStore();

  const availableSubzones = selectedMuscleId
    ? LOCAL_SUBZONES[selectedMuscleId] || []
    : [];

  const equipmentOptions = [
    { id: 'all', label: 'Todos' },
    { id: 'mancuernas', label: 'Mancuernas' },
    { id: 'ligas', label: 'Ligas / Bandas' },
    { id: 'corporal', label: 'Peso Corporal' },
    { id: 'maquina', label: 'Máquinas / Poleas' },
  ];

  return (
    <div className="border border-zinc-800/80 rounded-2xl p-4 sm:p-5 shadow-xl bg-zinc-900/90 text-white space-y-4">
      {/* SECCIÓN 1: SUBZONAS MUSCULARES */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 pb-1">
          <Layers className="w-4 h-4 text-lime-400" />
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-300">
            Subzonas Anatómicas
          </h3>
        </div>

        {availableSubzones.length === 0 ? (
          <p className="text-xs text-zinc-500 italic py-1">
            Selecciona un grupo muscular en el cuerpo para desplegar sus subzonas.
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSubzoneId(null)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                selectedSubzoneId === null
                  ? 'bg-lime-400 text-zinc-950 shadow-md shadow-lime-500/20'
                  : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              Todas las subzonas
            </button>

            {availableSubzones.map((subzone) => {
              const isSelected = selectedSubzoneId === subzone.id;
              return (
                <button
                  key={subzone.id}
                  onClick={() => setSelectedSubzoneId(subzone.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-lime-400 text-zinc-950 shadow-md shadow-lime-500/20'
                      : 'bg-zinc-950 text-zinc-300 border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {subzone.name}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* SECCIÓN 2: FILTRO POR EQUIPAMIENTO */}
      <div className="space-y-2 pt-2 border-t border-zinc-800">
        <div className="flex items-center gap-2 pb-1">
          <Filter className="w-4 h-4 text-lime-400" />
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-300">
            Filtrar por Equipamiento
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {equipmentOptions.map((item) => {
            const isSelected = selectedEquipment === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedEquipment(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-lime-500/20 text-lime-400 border border-lime-500/40 shadow-sm'
                    : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};