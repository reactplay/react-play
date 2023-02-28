import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import React, { useState } from 'react';
import SingleColor from './components/SingleColor';
import Values from 'values.js';

// WARNING: Do not change the entry componenet name
function ColorPalettesGenerator(props) {
  // Your Code Start below.
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <section className="color-palettes-generator-container">
          <h3>color generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              className={`${error ? 'error' : null} color-palettes-generator-input`}
              placeholder="#f15025"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <button className="color-palettes-generator-btn" type="submit">
              submit
            </button>
          </form>
        </section>
        <section className="color-palettes-generator-colors">
          {list.map((color, index) => {
            return <SingleColor key={index} {...color} hexColor={color.hex} index={index} />;
          })}
        </section>
      </div>
    </>
  );
}

export default ColorPalettesGenerator;
