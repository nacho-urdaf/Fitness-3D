export type EquipmentType = 'dumbbells' | 'bands' | 'machines' | 'bodyweight';

export interface MuscleSubzone {
  id: string;
  name: string;
  description?: string;
}

export interface MuscleGroup {
  id: string;
  name: string;
  subzones: MuscleSubzone[];
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroupId: string;
  subzoneId: string;
  equipment: EquipmentType;
  instructions?: string[];
  mediaUrl?: string; // URL de GIF o video demostrativo
}

export interface RoutineDay {
  dayId: string;
  dayName: string;
  exercises: Exercise[];
}