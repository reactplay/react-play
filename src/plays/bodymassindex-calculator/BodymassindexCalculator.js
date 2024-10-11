import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useState } from 'react';
import jsPDF from 'jspdf'; // For generating PDF

// WARNING: Do not change the entry component name
function BodymassindexCalculator(props) {
  // States for form data, BMI result, and dark mode
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to calculate BMI
  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height / 100) ** 2).toFixed(2);
      setBmi(bmiValue);
    } else {
      setBmi(null);
    }
  };

  // Function to generate health recommendation based on BMI
  const getHealthRecommendation = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue >= 18.5 && bmiValue < 24.9) return 'Normal weight';
    if (bmiValue >= 25 && bmiValue < 29.9) return 'Overweight';

    return 'Obese';
  };

  // Function to generate and download PDF report
  const downloadReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`BMI Report`, 10, 10);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Age: ${age}`, 10, 30);
    doc.text(`Gender: ${gender}`, 10, 40);
    doc.text(`Weight: ${weight} kg`, 10, 50);
    doc.text(`Height: ${height} cm`, 10, 60);
    doc.text(`BMI: ${bmi}`, 10, 70);
    doc.text(`Recommendation: ${getHealthRecommendation(bmi)}`, 10, 80);
    doc.save('bmi_report.pdf');
  };

  return (
    <div className={`play-details ${isDarkMode ? 'dark-mode' : ''}`}>
      <PlayHeader play={props} />
      <div className="play-details-body">
        <div className="bmi-container">
          <h1>Body Mass Index Calculator</h1>
          <div className="bmi-input">
            <input
              placeholder="Enter name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Enter age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              placeholder="Enter weight in kg"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <input
              placeholder="Enter height in cm"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <button onClick={calculateBMI}>Calculate BMI</button>
          </div>
          {bmi && (
            <div className="bmi-result">
              <h2>Your BMI is: {bmi}</h2>
              <p>Health Condition: {getHealthRecommendation(bmi)}</p>
              <button onClick={downloadReport}>Download PDF Report</button>
            </div>
          )}
          <button className="toggle-dark-mode" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BodymassindexCalculator;
