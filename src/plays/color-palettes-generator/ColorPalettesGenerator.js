import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useState, useEffect } from 'react';
import SingleColor from './components/SingleColor';
import { getcolorsarray, alertToast } from './components/utils';

function ColorPalettesGenerator(props) {
  const [color, setColor] = useState('#e01017');
  const [error, setError] = useState(false);
  const [colorlist, setColorList] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (color.length == 7) {
        // getcolorsarray function imported from Utils.js
        let colors = getcolorsarray(color);
        setColorList(colors);
        setError(false);
      } else {
        setError(true);
        // Imported from utils.js
        alertToast('Please enter a valid hex code');
      }
    } catch (error) {
      setError(true);
      // Imported from utils.js
      alertToast('Please enter a valid hex code');
    }
  };

  useEffect(() => {
    // getcolorsarray function imported from Utils.js
    let colors = getcolorsarray(color);
    setColorList(colors);
  }, []);

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
            <SingleColor hexColor={color} index={index} key={index} />
          ))}
      </section>
    </div>
  );
}

export default ColorPalettesGenerator;
