import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import './styles.css';

// WARNING: Do not change the entry component name
function BmrTdeeCalculator(props) {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState(null);

  const activityOptions = [
    { value: '1.2', label: 'Sedentary', desc: 'Little or no exercise' },
    { value: '1.375', label: 'Lightly Active', desc: 'Exercise 1-3 days/week' },
    { value: '1.55', label: 'Moderately Active', desc: 'Exercise 3-5 days/week' },
    { value: '1.725', label: 'Very Active', desc: 'Exercise 6-7 days/week' },
    { value: '1.9', label: 'Extra Active', desc: 'Very hard exercise or physical job' }
  ];

  const calculateBMR = () => {
    const ageNum = parseFloat(age);
    let weightKg = parseFloat(weight);
    let heightCm = parseFloat(height);

    if (!ageNum || !weightKg || !heightCm) {
      return;
    }

    // Convert imperial to metric if needed
    if (unit === 'imperial') {
      weightKg = weightKg * 0.453592; // lbs to kg
      heightCm = heightCm * 2.54; // inches to cm
    }

    // Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageNum - 161;
    }

    const activity = parseFloat(activityLevel);
    const tdee = bmr * activity;

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      deficit: Math.round(tdee - 500),
      surplus: Math.round(tdee + 500)
    });
  };

  const handleReset = () => {
    setGender('male');
    setAge('');
    setWeight('');
    setHeight('');
    setActivityLevel('1.2');
    setUnit('metric');
    setResult(null);
  };

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body">
        <div className="bmr-tdee-container">
          <h2 className="bmr-tdee-title">BMR & TDEE Calculator</h2>
          <p className="bmr-tdee-subtitle">
            Calculate your Basal Metabolic Rate and Total Daily Energy Expenditure
          </p>

          <div className="bmr-tdee-form">
            {/* Unit Toggle */}
            <div className="bmr-tdee-field">
              <label className="bmr-tdee-label">Unit System</label>
              <div className="bmr-tdee-toggle-group">
                <button
                  className={`bmr-tdee-toggle-btn ${unit === 'metric' ? 'active' : ''}`}
                  onClick={() => setUnit('metric')}
                  type="button"
                >
                  Metric (kg/cm)
                </button>
                <button
                  className={`bmr-tdee-toggle-btn ${unit === 'imperial' ? 'active' : ''}`}
                  onClick={() => setUnit('imperial')}
                  type="button"
                >
                  Imperial (lbs/in)
                </button>
              </div>
            </div>

            {/* Gender */}
            <div className="bmr-tdee-field">
              <label className="bmr-tdee-label">Gender</label>
              <div className="bmr-tdee-toggle-group">
                <button
                  className={`bmr-tdee-toggle-btn ${gender === 'male' ? 'active' : ''}`}
                  onClick={() => setGender('male')}
                  type="button"
                >
                  ♂ Male
                </button>
                <button
                  className={`bmr-tdee-toggle-btn ${gender === 'female' ? 'active' : ''}`}
                  onClick={() => setGender('female')}
                  type="button"
                >
                  ♀ Female
                </button>
              </div>
            </div>

            {/* Age */}
            <div className="bmr-tdee-field">
              <label className="bmr-tdee-label" htmlFor="bmr-age">
                Age
              </label>
              <input
                className="bmr-tdee-input"
                id="bmr-age"
                min="1"
                max="120"
                placeholder="Enter your age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            {/* Weight */}
            <div className="bmr-tdee-field">
              <label className="bmr-tdee-label" htmlFor="bmr-weight">
                Weight ({unit === 'metric' ? 'kg' : 'lbs'})
              </label>
              <input
                className="bmr-tdee-input"
                id="bmr-weight"
                min="1"
                placeholder={`Enter weight in ${unit === 'metric' ? 'kg' : 'lbs'}`}
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            {/* Height */}
            <div className="bmr-tdee-field">
              <label className="bmr-tdee-label" htmlFor="bmr-height">
                Height ({unit === 'metric' ? 'cm' : 'inches'})
              </label>
              <input
                className="bmr-tdee-input"
                id="bmr-height"
                min="1"
                placeholder={`Enter height in ${unit === 'metric' ? 'cm' : 'inches'}`}
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            {/* Activity Level */}
            <div className="bmr-tdee-field">
              <label className="bmr-tdee-label" htmlFor="bmr-activity">
                Activity Level
              </label>
              <select
                className="bmr-tdee-select"
                id="bmr-activity"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                {activityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label} — {opt.desc}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="bmr-tdee-btn-group">
              <button className="bmr-tdee-btn bmr-tdee-btn-primary" onClick={calculateBMR} type="button">
                Calculate
              </button>
              <button className="bmr-tdee-btn bmr-tdee-btn-secondary" onClick={handleReset} type="button">
                Reset
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="bmr-tdee-results">
              <h3 className="bmr-tdee-results-title">Your Results</h3>
              <div className="bmr-tdee-results-grid">
                <div className="bmr-tdee-result-card bmr-tdee-card-bmr">
                  <span className="bmr-tdee-result-label">BMR</span>
                  <span className="bmr-tdee-result-value">{result.bmr}</span>
                  <span className="bmr-tdee-result-unit">cal/day</span>
                  <span className="bmr-tdee-result-desc">Calories at complete rest</span>
                </div>
                <div className="bmr-tdee-result-card bmr-tdee-card-tdee">
                  <span className="bmr-tdee-result-label">TDEE</span>
                  <span className="bmr-tdee-result-value">{result.tdee}</span>
                  <span className="bmr-tdee-result-unit">cal/day</span>
                  <span className="bmr-tdee-result-desc">Maintenance calories</span>
                </div>
                <div className="bmr-tdee-result-card bmr-tdee-card-deficit">
                  <span className="bmr-tdee-result-label">Weight Loss</span>
                  <span className="bmr-tdee-result-value">{result.deficit}</span>
                  <span className="bmr-tdee-result-unit">cal/day</span>
                  <span className="bmr-tdee-result-desc">TDEE − 500 cal deficit</span>
                </div>
                <div className="bmr-tdee-result-card bmr-tdee-card-surplus">
                  <span className="bmr-tdee-result-label">Weight Gain</span>
                  <span className="bmr-tdee-result-value">{result.surplus}</span>
                  <span className="bmr-tdee-result-unit">cal/day</span>
                  <span className="bmr-tdee-result-desc">TDEE + 500 cal surplus</span>
                </div>
              </div>

              <div className="bmr-tdee-info">
                <h4>What do these numbers mean?</h4>
                <ul>
                  <li>
                    <strong>BMR</strong> — The calories your body burns at complete rest just to keep
                    you alive (breathing, circulation, cell production).
                  </li>
                  <li>
                    <strong>TDEE</strong> — Your total calories burned per day including physical
                    activity. Eat this amount to maintain weight.
                  </li>
                  <li>
                    <strong>Weight Loss</strong> — A 500 cal/day deficit leads to ~0.45 kg (1 lb)
                    lost per week.
                  </li>
                  <li>
                    <strong>Weight Gain</strong> — A 500 cal/day surplus leads to ~0.45 kg (1 lb)
                    gained per week.
                  </li>
                </ul>
                <p className="bmr-tdee-info-note">
                  * Calculated using the Mifflin-St Jeor Equation, considered the most accurate BMR
                  formula.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BmrTdeeCalculator;
