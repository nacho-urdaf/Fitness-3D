'use client';

import React from 'react';
import { User, Dumbbell, Trophy } from 'lucide-react';

interface Props {
  isDarkMode?: boolean;
}

export const UserProfileSummary: React.FC<Props> = ({ isDarkMode = false }) => {
  return (
    <div
      className={`border rounded-2xl p-4 shadow-sm transition-colors duration-300 flex items-center justify-between gap-3 ${
        isDarkMode
          ? 'bg-slate-900/80 border-slate-800 text-white'
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20 flex items-center justify-center font-black">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-sm font-bold leading-tight">¡Hola de nuevo!</h2>
          <p className="text-xs text-slate-400">Diseña tu rutina interactiva en 3D</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden sm:flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
          <Trophy className="w-3.5 h-3.5" />
          <span>Nivel Activo</span>
        </span>
      </div>
    </div>
  );
};