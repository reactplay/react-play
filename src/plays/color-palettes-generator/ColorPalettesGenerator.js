import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useState } from 'react';
import SingleColor from './components/SingleColor';
import Values from 'values.js';

function ColorPalettesGenerator(props) {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colorlist, setColorList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(12);
      setColorList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <section className="color-palettes-generator-container">
        <h3 className="color-palettes-generator-heading">color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${
              error ? 'color-palettes-generator-input-error' : null
            } color-palettes-generator-input`}
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
        {colorlist &&
          colorlist.map((color, index) => (
            <SingleColor key={index} {...color} hexColor={color.hex} index={index} />
          ))}
      </section>
    </div>
  );
}

export default ColorPalettesGenerator;
