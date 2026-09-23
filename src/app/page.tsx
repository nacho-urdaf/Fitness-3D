'use client';

import React, { useState } from 'react';
import { HumanModelViewer } from '@/components/HumanModelViewer';
import { SubzoneSelector } from '@/components/SubzoneSelector';
import { ExerciseList } from '@/components/ExerciseList';
import { RoutinePlanner } from '@/components/RoutinePlanner';
import { useTheme } from '@/components/ThemeProvider';
import { User, Dumbbell, Calendar, Moon, Sun } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'model' | 'exercises' | 'routine'>('model');
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-[#05070b] text-slate-100' : 'bg-slate-50 text-slate-900'} flex flex-col pb-20 lg:pb-8 transition-colors duration-300`}>
      {/* Encabezado */}
      <header className={`border-b ${isDarkMode ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-white/90'} backdrop-blur-md px-4 py-3 sticky top-0 z-30 transition-colors`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">
              Fitness 3D
            </h1>
            <p className={`text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} hidden sm:block`}>
              Diseña tu rutina personalizada interactuando con el cuerpo 3D
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Botón Funcional de Tema */}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all active:scale-95 shadow-sm ${
                isDarkMode
                  ? 'bg-slate-800 text-sky-400 border-slate-700 hover:bg-slate-700'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-sky-600" />
                  <span>Modo Oscuro</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 space-y-6">
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 h-[520px] sticky top-20">
            <HumanModelViewer isDarkMode={isDarkMode} />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <SubzoneSelector />
            <ExerciseList />
          </div>
        </div>

        <div className="hidden lg:block pt-4">
          <RoutinePlanner />
        </div>

        {/* Móvil */}
        <div className="block lg:hidden space-y-4">
          {activeTab === 'model' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="h-[380px] sm:h-[450px] w-full">
                <HumanModelViewer isDarkMode={isDarkMode} />
              </div>
              <SubzoneSelector />
            </div>
          )}

          {activeTab === 'exercises' && (
            <div className="space-y-4 animate-fadeIn">
              <SubzoneSelector />
              <ExerciseList />
            </div>
          )}

          {activeTab === 'routine' && (
            <div className="animate-fadeIn">
              <RoutinePlanner />
            </div>
          )}
        </div>
      </main>

      {/* Navbar Inferior Móvil */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 backdrop-blur-lg border-t z-40 px-3 py-2 ${
        isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
      }`}>
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('model')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
              activeTab === 'model' ? 'text-sky-500 font-bold' : isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px]">Anatomía 3D</span>
          </button>

          <button
            onClick={() => setActiveTab('exercises')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
              activeTab === 'exercises' ? 'text-sky-500 font-bold' : isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <Dumbbell className="w-5 h-5" />
            <span className="text-[10px]">Ejercicios</span>
          </button>

          <button
            onClick={() => setActiveTab('routine')}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
              activeTab === 'routine' ? 'text-sky-500 font-bold' : isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-[10px]">Mi Rutina</span>
          </button>
        </div>
      </nav>
    </div>
  );
}