import { useEffect, useState } from 'react';
import useSound from 'use-sound';

const Button = ({ button, volume }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: '#284179',
    border: '5px solid #283177'
  });
  const [play] = useSound(button.sound, {
    onend: () => {
      setIsPlaying(false);
    },
    volume: volume / 100
  });

  const handleClick = () => {
    setIsPlaying(true);
    play();
  };

  useEffect(() => {
    const borderColor = isPlaying ? '#22541C' : '#283177';
    const bgColor = isPlaying ? '#256E3B' : '#284179';
    const bColors = {
      backgroundColor: bgColor,
      border: '5px solid ' + borderColor
    };

    setButtonStyle(bColors);
  }, [isPlaying]);

  return (
    <>
      <div className="button-container" style={buttonStyle} onClick={handleClick}>
        <p className="button-text">{button.name}</p>
      </div>
    </>
  );
};

export default Button;
