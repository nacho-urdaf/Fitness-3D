import { create } from 'zustand';
import { EquipmentType, Exercise, RoutineDay } from '@/types/fitness';
import { MOCK_EXERCISES } from '@/data/mockData';

const WEEK_DAYS = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];

interface FitnessState {
  // Selección actual
  selectedMuscleId: string | null;
  selectedSubzoneId: string | null;
  selectedEquipment: EquipmentType | 'all';

  // Rutina semanal
  routineDays: RoutineDay[];

  // Acciones
  setSelectedMuscle: (muscleId: string | null) => void;
  setSelectedSubzone: (subzoneId: string | null) => void;
  setSelectedEquipment: (equipment: EquipmentType | 'all') => void;
  
  // Gestión del Carrito / Rutina
  addExerciseToDay: (dayId: string, exercise: Exercise) => void;
  removeExerciseFromDay: (dayId: string, exerciseId: string) => void;
  reorderExercisesInDay: (dayId: string, newExercises: Exercise[]) => void;
  setDaysCount: (count: number) => void;
  
  // Selectores helpers
  getFilteredExercises: () => Exercise[];
}

export const useFitnessStore = create<FitnessState>((set, get) => ({
  selectedMuscleId: 'triceps',
  selectedSubzoneId: null,
  selectedEquipment: 'all',

  // Por defecto inicializamos con 3 días (Lunes, Martes, Miércoles)
  routineDays: [
    { dayId: 'day-1', dayName: 'Lunes', exercises: [] },
    { dayId: 'day-2', dayName: 'Martes', exercises: [] },
    { dayId: 'day-3', dayName: 'Miércoles', exercises: [] },
  ],

  setSelectedMuscle: (muscleId) => 
    set({ selectedMuscleId: muscleId, selectedSubzoneId: null }),

  setSelectedSubzone: (subzoneId) => 
    set({ selectedSubzoneId: subzoneId }),

  setSelectedEquipment: (equipment) => 
    set({ selectedEquipment: equipment }),

  addExerciseToDay: (dayId, exercise) => set((state) => ({
    routineDays: state.routineDays.map((day) => {
      if (day.dayId === dayId) {
        if (day.exercises.some((e) => e.id === exercise.id)) return day;
        return { ...day, exercises: [...day.exercises, exercise] };
      }
      return day;
    }),
  })),

  removeExerciseFromDay: (dayId, exerciseId) => set((state) => ({
    routineDays: state.routineDays.map((day) => {
      if (day.dayId === dayId) {
        return { ...day, exercises: day.exercises.filter((e) => e.id !== exerciseId) };
      }
      return day;
    }),
  })),

  reorderExercisesInDay: (dayId, newExercises) => set((state) => ({
    routineDays: state.routineDays.map((day) => 
      day.dayId === dayId ? { ...day, exercises: newExercises } : day
    ),
  })),

  setDaysCount: (count) => set((state) => {
    const currentDays = state.routineDays;
    if (count > currentDays.length) {
      const newDays: RoutineDay[] = [...currentDays];
      for (let i = currentDays.length; i < count; i++) {
        newDays.push({
          dayId: `day-${i + 1}`,
          dayName: WEEK_DAYS[i] || `Día ${i + 1}`,
          exercises: [],
        });
      }
      return { routineDays: newDays };
    } else {
      return { routineDays: currentDays.slice(0, count) };
    }
  }),

  getFilteredExercises: () => {
    const { selectedMuscleId, selectedSubzoneId, selectedEquipment } = get();
    return MOCK_EXERCISES.filter((ex) => {
      const matchesMuscle = !selectedMuscleId || ex.muscleGroupId === selectedMuscleId;
      const matchesSubzone = !selectedSubzoneId || ex.subzoneId === selectedSubzoneId;
      const matchesEquipment = selectedEquipment === 'all' || ex.equipment === selectedEquipment;
      return matchesMuscle && matchesSubzone && matchesEquipment;
    });
  },
}));