# Body Composition Calculator

An interactive Body Composition Calculator that computes Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) using scientifically validated formulas.

This calculator helps users understand their daily calorie requirements based on body measurements and activity level.

---

## Play Demographic

- Language: TypeScript
- Level: Intermediate
- Category: Health / Fitness / Calculator

---

## Creator Information

- User: deansereigns
- GitHub Link: https://github.com/deansereigns

---

## Implementation Details

This play is built using React and TypeScript with a modular and scalable architecture.

The calculator uses the **Mifflin-St Jeor Equation**, which is considered one of the most accurate formulas for estimating Basal Metabolic Rate.

### BMR (Basal Metabolic Rate)

BMR represents the number of calories your body requires to perform essential life-sustaining functions while at rest.

These include:

- Breathing
- Blood circulation
- Brain activity
- Cell production
- Maintaining body temperature

Formula used:

Male:

```text
BMR = (10 × weight_kg) + (6.25 × height_cm) − (5 × age_years) + 5
```

Female:

```text
BMR = (10 × weight_kg) + (6.25 × height_cm) − (5 × age_years) − 161
```

---

### TDEE (Total Daily Energy Expenditure)

TDEE represents the total calories your body burns in a day including all physical activities.

It is calculated by multiplying BMR with an activity multiplier.

Formula:
```text
TDEE = BMR × activity_multiplier
```

Activity multipliers used:

| Activity Level | Multiplier |
|---------------|------------|
| Sedentary | 1.2 |
| Light Activity | 1.375 |
| Moderate Activity | 1.55 |
| Active | 1.725 |
| Very Active | 1.9 |

---

### Features Implemented

- Built with TypeScript for type safety
- Modular and reusable component structure
- Real-time BMR and TDEE calculation using React Hooks
- Controlled form inputs with validation
- Clean and responsive user interface

---

## Considerations

- Validates inputs before performing calculations
- Handles empty or invalid values safely
- Optimized using React Hooks
- Easily extendable for additional health metrics

---

## Future Improvements

- BMI and body fat calculator
- Calorie recommendations for weight goals
- Enhanced UI and data visualization
