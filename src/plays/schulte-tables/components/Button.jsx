import generateColor from '../utils/generateColor';

const Button = ({ handleClick, value }) => {
  const color = generateColor();

  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Button;
