/**
 * Gender options supported by calculator
 */
export type Gender = 'male' | 'female';

/**
 * Activity levels used to calculate TDEE
 */
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';

/**
 * Form state structure
 */
export interface FormData {
  gender: Gender;
  weight: string;
  height: string;
  age: string;
  activityLevel: ActivityLevel;
}
