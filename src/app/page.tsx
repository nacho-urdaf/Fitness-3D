'use client';

import React, { useState } from 'react';
import { AnatomicalBodySVG } from '@/components/AnatomicalBodySVG';
import { SubzoneSelector } from '@/components/SubzoneSelector';
import { ExerciseList } from '@/components/ExerciseList';
import { RoutinePlanner } from '@/components/RoutinePlanner';
import { WeeklyVolumeSummary } from '@/components/WeeklyVolumeSummary';
import { Activity, Dumbbell, Calendar, BarChart3, Zap } from 'lucide-react';

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState<'model' | 'exercises' | 'routine' | 'stats'>('model');

  return (
    <div className="min-h-screen bg-zinc-950 text-white transition-colors duration-300 pb-20 md:pb-8">
      {/* Encabezado Superior Pro Dark */}
      <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-lime-500 text-zinc-950 shadow-md shadow-lime-500/20 font-black">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <h1 className="font-black text-base md:text-lg tracking-wider text-white uppercase">
            Fitness <span className="text-lime-400">Studio</span>
          </h1>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto p-3 sm:p-5 space-y-5">
        {/* --- VISTA ESCRITORIO / TABLET --- */}
        <div className="hidden lg:grid grid-cols-12 gap-5">
          {/* Columna Izquierda: Mapa Corporal 2D + Métricas */}
          <div className="col-span-5 space-y-4">
            <AnatomicalBodySVG isDarkMode={true} />
            <WeeklyVolumeSummary isDarkMode={true} />
          </div>

          {/* Columna Derecha: Subzonas + Catálogo */}
          <div className="col-span-7 space-y-4">
            <SubzoneSelector isDarkMode={true} />
            <ExerciseList isDarkMode={true} />
          </div>

          {/* Fila Inferior: Planificador de Rutinas */}
          <div className="col-span-12">
            <RoutinePlanner isDarkMode={true} />
          </div>
        </div>

        {/* --- VISTA MÓVIL --- */}
        <div className="block lg:hidden space-y-4">
          {activeTab === 'model' && (
            <div className="space-y-4 animate-fadeIn">
              <AnatomicalBodySVG isDarkMode={true} />
              <SubzoneSelector isDarkMode={true} />
            </div>
          )}

          {activeTab === 'exercises' && (
            <div className="space-y-4 animate-fadeIn">
              <SubzoneSelector isDarkMode={true} />
              <ExerciseList isDarkMode={true} />
            </div>
          )}

          {activeTab === 'routine' && (
            <div className="animate-fadeIn space-y-4">
              <RoutinePlanner isDarkMode={true} />
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="animate-fadeIn">
              <WeeklyVolumeSummary isDarkMode={true} />
            </div>
          )}
        </div>
      </main>

      {/* BARRA DE NAVEGACIÓN INFERIOR PARA MÓVILES */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800/80 px-2 py-2 flex items-center justify-around shadow-2xl">
        <button
          onClick={() => setActiveTab('model')}
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${
            activeTab === 'model'
              ? 'text-lime-400 font-extrabold bg-lime-500/10'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Activity className="w-5 h-5" />
          <span className="text-[10px]">Cuerpo</span>
        </button>

        <button
          onClick={() => setActiveTab('exercises')}
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${
            activeTab === 'exercises'
              ? 'text-lime-400 font-extrabold bg-lime-500/10'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Dumbbell className="w-5 h-5" />
          <span className="text-[10px]">Ejercicios</span>
        </button>

        <button
          onClick={() => setActiveTab('routine')}
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${
            activeTab === 'routine'
              ? 'text-lime-400 font-extrabold bg-lime-500/10'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px]">Mi Rutina</span>
        </button>

        <button
          onClick={() => setActiveTab('stats')}
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${
            activeTab === 'stats'
              ? 'text-lime-400 font-extrabold bg-lime-500/10'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          <span className="text-[10px]">Métricas</span>
        </button>
      </nav>
    </div>
  );
}