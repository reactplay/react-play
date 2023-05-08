import { toast } from 'react-toastify';

const COLOR_ARRAY_LENGTH = 100;
const COLOR_INCREMENT = 3.33;

export const getcolorsarray = (hash) => {
  const colorArray = [];
  // Convert hex to RGB
  const red = parseInt(hash.slice(1, 3), 16);
  const green = parseInt(hash.slice(3, 5), 16);
  const blue = parseInt(hash.slice(5, 7), 16);

  for (let i = COLOR_ARRAY_LENGTH; i >= 0; i -= COLOR_INCREMENT) {
    // Convert RGB to HSLA
    const hsl = rgbToHsl(red, green, blue, i);

    // Convert HSLA to HEX
    const hexColor = hslaToHex(hsl.h, hsl.s, hsl.l);
    // Final Array
    colorArray.push(hexColor);
  }

  return colorArray;
};

export const rgbToHsl = (red, green, blue, lightessOfColor) => {
  red /= 255;
  green /= 255;
  blue /= 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  // HSL => H = hue, S = saturation, L = lightness

  let hue,
    saturation,
    lightness = (max + min) / 2;

  if (max == min) {
    hue = saturation = 0; // achromatic
  } else {
    const d = max - min;
    saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case red:
        hue = (green - blue) / d + (green < blue ? 6 : 0);

        break;
      case green:
        hue = (blue - red) / d + 2;

        break;
      case blue:
        hue = (red - green) / d + 4;

        break;
      default:
        hue = 0;
    }

    hue /= 6;
  }

  return {
    // HSL => H = hue, S = saturation, L = lightness
    h: Math.round(hue * 360),
    s: Math.round(saturation * 100),
    l: lightessOfColor
  };
};

export const hslaToHex = (hue, saturation, lightness) => {
  // Convert hsla values to rgba values
  // HSL => H = hue, S = saturation, L = lightness
  let red, green, blue;
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  const k = (n) => (n + hue * 12) % 12;
  const alphaa = saturation * Math.min(lightness, 1 - lightness);
  const f = (n) => lightness - alphaa * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  red = Math.round(f(0) * 255);
  green = Math.round(f(8) * 255);
  blue = Math.round(f(4) * 255);

  // Convert rgba values to hex code
  let hexR = red.toString(16).padStart(2, '0');
  let hexG = green.toString(16).padStart(2, '0');
  let hexB = blue.toString(16).padStart(2, '0');
  // let hexA = Math.round(alphaa * 255).toString(16).padStart(2, '0');

  return `#${hexR}${hexG}${hexB}`;
};

export const showToastMessage = (message) => {
  toast.success(message, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  });
};
