'use client';

import React from 'react';
import { useFitnessStore } from '@/store/useFitnessStore';
import { Activity, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

interface Props {
  isDarkMode?: boolean;
}

export const WeeklyVolumeSummary: React.FC<Props> = ({ isDarkMode = true }) => {
  const { routineDays = [] } = useFitnessStore();

  let totalExercises = 0;
  let totalSets = 0;
  let estimatedReps = 0;
  const muscleSeriesMap: Record<string, number> = {};

  routineDays.forEach((day) => {
    totalExercises += day.exercises.length;
    day.exercises.forEach((ex) => {
      const sets = 3;
      const reps = 10;
      totalSets += sets;
      estimatedReps += sets * reps;

      const groupName = ex.muscleGroupId || 'Otros';
      muscleSeriesMap[groupName] = (muscleSeriesMap[groupName] || 0) + sets;
    });
  });

  const activeDaysCount = routineDays.filter((d) => d.exercises.length > 0).length;

  return (
    <div className="border border-zinc-800/80 rounded-2xl p-4 sm:p-5 shadow-xl bg-zinc-900/90 text-white space-y-4">
      {/* Encabezado del Panel */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-lime-400" />
          <h2 className="text-base font-black tracking-tight text-white">
            Análisis de Carga Semanal
          </h2>
        </div>
        <span className="text-[10px] font-extrabold uppercase text-lime-400 bg-lime-500/10 px-2.5 py-1 rounded-full border border-lime-500/20">
          En Tiempo Real
        </span>
      </div>

      {/* Tarjetas de Métricas Rápidas */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3 text-center">
        <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800">
          <span className="text-[9px] sm:text-[10px] font-black uppercase text-zinc-400 block">
            Series Semanales
          </span>
          <span className="text-lg sm:text-2xl font-black text-lime-400">
            {totalSets}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800">
          <span className="text-[9px] sm:text-[10px] font-black uppercase text-zinc-400 block">
            Días Activos
          </span>
          <span className="text-lg sm:text-2xl font-black text-emerald-400">
            {activeDaysCount}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800">
          <span className="text-[9px] sm:text-[10px] font-black uppercase text-zinc-400 block">
            Reps Estimadas
          </span>
          <span className="text-lg sm:text-2xl font-black text-zinc-200">
            {estimatedReps}
          </span>
        </div>
      </div>

      {/* Desglose Visual por Grupo Muscular */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase text-zinc-400">
            Balance por Músculo:
          </span>
          <span className="text-[10px] font-bold text-zinc-500">Meta: 10 - 20 series</span>
        </div>

        {Object.keys(muscleSeriesMap).length === 0 ? (
          <div className="text-center py-6 border border-dashed border-zinc-800 rounded-xl">
            <p className="text-xs text-zinc-500 italic">
              Agrega ejercicios a tu rutina para calcular la carga.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {Object.entries(muscleSeriesMap).map(([muscle, series]) => {
              const percentage = Math.min(Math.round((series / 24) * 100), 100);
              const isOptimal = series >= 10 && series <= 20;
              const isHigh = series > 22;

              return (
                <div key={muscle} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="capitalize text-zinc-200">
                      {muscle}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-lime-400 font-black">
                        {series} series
                      </span>
                      {isOptimal && (
                        <span className="flex items-center gap-0.5 text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3" /> Óptimo
                        </span>
                      )}
                      {!isOptimal && !isHigh && (
                        <span className="flex items-center gap-0.5 text-[9px] text-amber-400 font-bold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                          <AlertCircle className="w-3 h-3" /> Bajo
                        </span>
                      )}
                      {isHigh && (
                        <span className="flex items-center gap-0.5 text-[9px] text-rose-400 font-bold bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
                          <TrendingUp className="w-3 h-3" /> Elevado
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="w-full h-2 rounded-full bg-zinc-950 overflow-hidden border border-zinc-800">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isOptimal
                          ? 'bg-lime-400 shadow-[0_0_10px_rgba(132,204,22,0.5)]'
                          : isHigh
                          ? 'bg-rose-500'
                          : 'bg-amber-400'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};