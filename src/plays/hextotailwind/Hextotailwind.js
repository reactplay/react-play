import PlayHeader from 'common/playlists/PlayHeader';
import { useRef, useState } from 'react';
import './styles.css';
import Tailwincolor from './Tailwincolor';
<script src="https://cdn.tailwindcss.com" />;

// WARNING: Do not change the entry componenet name
function Hextotailwind(props) {
  const textInput = useRef('');
  const [twColor, setTwColor] = useState(null);
  // Your Code Start below.

  function convertToTW(params) {
    if (!isValidHexColorCode(textInput.current.value)) {
      return alert('Please provide hex color only.');
    }

    let twColor = Tailwincolor(textInput.current.value);
    setTwColor(twColor.twHex);

    // return alert(twColor.hex);
  }

  function isValidHexColorCode(colorCode) {
    // Regular expression to match a hexadecimal color code that starts with # and is 6 characters long
    const hexCodeRegex = /^#[0-9A-Fa-f]{6}$/;

    return hexCodeRegex.test(colorCode);
  }

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <h1>Play Details - Hextotailwind</h1>
            <p className="text-2xl pt-4">
              Hex to Tailwind css nearest color converter. Please provide your hex color.
            </p>
          </div>
          <div className="my-4 mx-auto max-w-4xl rounded shadow-sm min-h-1/2 border border-black">
            <div className="flex items-center justify-center">
              <input
                className="block w-full bg-white shadow-xl max-w-md h-14 text-center rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 "
                id="colors"
                name="colors"
                placeholder="#4d7c0f"
                ref={textInput}
                type="text"
              />
              {/* <p className="w-full text-center py-4">Please provide your Hex color here.</p> */}
              <button
                className="text-center py-4 px-8 bg-blue-700 m-8 rounded-md text-white font-bold "
                onClick={convertToTW}
              >
                Convert to TailwindCSS
              </button>
            </div>
          </div>
          <div className={`w-16 h-16 bg-[${twColor}]`}>Hello</div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Hextotailwind;
