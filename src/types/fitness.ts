export type EquipmentType = 'all' | 'dumbbells' | 'bands' | 'bodyweight' | 'machines';

export interface MuscleSubzone {
  id: string;
  name: string;
  description: string;
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
  equipment: 'dumbbells' | 'bands' | 'bodyweight' | 'machines';
  instructions?: string[];
}

export interface RoutineDay {
  dayId: string;
  dayName: string;
  exercises: Exercise[];
}

export interface UserSubscription {
  isPro: boolean;
  tier: 'free' | 'monthly' | 'annual';
  expiresAt?: string;
}