import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Exercise } from '@/types/fitness';

export interface RoutineDay {
  dayId: string;
  dayName: string;
  exercises: Exercise[];
}

const INITIAL_ROUTINE_DAYS: RoutineDay[] = [
  {
    dayId: 'day-1',
    dayName: 'LUNES',
    exercises: [],
  },
  {
    dayId: 'day-2',
    dayName: 'MARTES',
    exercises: [],
  },
  {
    dayId: 'day-3',
    dayName: 'MIÉRCOLES',
    exercises: [],
  },
];

interface FitnessStore {
  // Selección Activa en el Modelo 3D
  selectedMuscleId: string | null;
  selectedSubzoneId: string | null;
  selectedEquipment: string;

  // Planificador de Rutinas
  routineDays: RoutineDay[];

  // Acciones de Selección
  setSelectedMuscleId: (id: string | null) => void;
  setSelectedSubzoneId: (id: string | null) => void;
  setSelectedEquipment: (equipment: string) => void;

  // Acciones de Rutina
  setDaysCount: (count: number) => void;
  addExerciseToDay: (dayId: string, exercise: Exercise) => void;
  removeExerciseFromDay: (dayId: string, exerciseId: string) => void;
  removeDay: (dayId: string) => void;
  clearAllRoutine: () => void;
  resetToDefaultRoutine: () => void;
}

export const useFitnessStore = create<FitnessStore>()(
  persist(
    (set) => ({
      selectedMuscleId: 'chest',
      selectedSubzoneId: null,
      selectedEquipment: 'all',

      routineDays: INITIAL_ROUTINE_DAYS,

      setSelectedMuscleId: (id) =>
        set({ selectedMuscleId: id, selectedSubzoneId: null }),

      setSelectedSubzoneId: (id) => set({ selectedSubzoneId: id }),

      setSelectedEquipment: (equipment) => set({ selectedEquipment: equipment }),

      setDaysCount: (count) =>
        set((state) => {
          const currentDays = [...state.routineDays];
          if (count > currentDays.length) {
            for (let i = currentDays.length + 1; i <= count; i++) {
              currentDays.push({
                dayId: `day-${Date.now()}-${i}`,
                dayName: `DÍA ${i}`,
                exercises: [],
              });
            }
          } else if (count < currentDays.length && count >= 1) {
            currentDays.length = count;
          }
          return { routineDays: currentDays };
        }),

      addExerciseToDay: (dayId, exercise) =>
        set((state) => ({
          routineDays: state.routineDays.map((day) =>
            day.dayId === dayId
              ? { ...day, exercises: [...day.exercises, exercise] }
              : day
          ),
        })),

      removeExerciseFromDay: (dayId, exerciseId) =>
        set((state) => ({
          routineDays: state.routineDays.map((day) =>
            day.dayId === dayId
              ? {
                  ...day,
                  exercises: day.exercises.filter((ex) => ex.id !== exerciseId),
                }
              : day
          ),
        })),

      removeDay: (dayId) =>
        set((state) => ({
          routineDays: state.routineDays.filter((day) => day.dayId !== dayId),
        })),

      clearAllRoutine: () =>
        set((state) => ({
          routineDays: state.routineDays.map((day) => ({
            ...day,
            exercises: [],
          })),
        })),

      resetToDefaultRoutine: () =>
        set({
          routineDays: INITIAL_ROUTINE_DAYS,
        }),
    }),
    {
      name: 'fitness-3d-routine-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        routineDays: state.routineDays,
        selectedEquipment: state.selectedEquipment,
      }),
    }
  )
);