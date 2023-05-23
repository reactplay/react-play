import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useState, useEffect } from 'react';
import SingleColor from './components/SingleColor';
import { getcolorsarray, showToastMessage } from './components/utils';

function ColorPalettesGenerator(props) {
  const [color, setColor] = useState('#e01017');
  const [error, setError] = useState(false);
  const [colorlist, setColorList] = useState([]);
  const ErrorMessage = 'Please enter a valid hex code';

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (color.length == 7 && color[0] == '#') {
        // getcolorsarray function imported from Utils.js
        const colors = getcolorsarray(color);
        setColorList(colors);
        setError(false);
      } else {
        throw ErrorMessage;
      }
    } catch (error) {
      setError(true);
      showToastMessage(error);
    }
  };

  useEffect(() => {
    // getcolorsarray function imported from Utils.js
    const colors = getcolorsarray(color);
    setColorList(colors);
  }, []);

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <section className="color-palettes-generator-container">
        <h3 className="color-palettes-generator-heading">Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${
              error ? 'color-palettes-generator-input-error' : null
            } color-palettes-generator-input`}
            placeholder="#f15025"
            type="text"
            value={color}
            onChange={({ target }) => setColor(target.value)}
          />
          <button className="color-palettes-generator-btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="color-palettes-generator-colors">
        {colorlist.map((color, index) => (
          <SingleColor hexColor={color} index={index} key={index} />
        ))}
      </section>
    </div>
  );
}

export default ColorPalettesGenerator;
