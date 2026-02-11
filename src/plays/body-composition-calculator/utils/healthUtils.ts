import { Gender, ActivityLevel } from '../types';

/**
 * Parameters required for BMR calculation
 */
export interface BMRParams {
  gender: Gender;
  weight: number;
  height: number;
  age: number;
}

/**
 * Standard Activity multipliers used to convert BMR to TDEE
 * Source: widely accepted fitness and nutrition standards
 */
const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9
};

/**
 * Calcualtes Basal Metabolic Rate (BMR)
 *
 * Formula: Mifflin-St jeor Equation
 *
 * Male:
 *  BMR = 10 x weight + 6.25 x height - 5 x age + 5
 *
 * Female:
 *  BMR = 10 x weight + 6.25 x height -5 x age - 161
 *
 * @params params - gender, weight (kg), height (cm), age(years)
 * @returns number (kcal/day)
 */
export function calculateBMR(params: BMRParams): number {
  const { gender, weight, height, age } = params;

  // Basic validation safeguard
  if (
    weight <= 0 ||
    height <= 0 ||
    age <= 0 ||
    Number.isNaN(weight) ||
    Number.isNaN(height) ||
    Number.isNaN(age)
  ) {
    return 0;
  }
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }

  return 10 * weight + 6.25 * height - 5 * age - 161;
}

/**
 * Calcualtes Total Daily Energy Expenditure (TDEE)
 *
 * Fromula:
 *  TDEE = BMR x activity multiplier
 *
 * @param bmr -  Basal Metabolic Rate
 * @param activityLevel - selected activity level
 * @returns number (kcal/day)
 */
export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  if (bmr <= 0 || Number.isNaN(bmr)) {
    return 0;
  }

  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel];

  return bmr * multiplier;
}

/**
 * Optional helper function to calcualte both metrics together
 * Useful if you want one call instead of two
 */
export function calculateHealthMetrics(
  params: BMRParams,
  activityLevel: ActivityLevel
): {
  bmr: number;
  tdee: number;
} {
  const bmr = calculateBMR(params);
  const tdee = calculateTDEE(bmr, activityLevel);

  return {
    bmr,
    tdee
  };
}
