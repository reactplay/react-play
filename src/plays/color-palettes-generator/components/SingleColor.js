import { alertToast } from './utils';

const SingleColor = ({ index, hexColor }) => {
  return (
    <>
      <article
        className={`color-palettes-generator-color ${
          index > 10 && 'color-palettes-generator-color-light'
        }`}
        style={{ backgroundColor: `${hexColor}` }}
        onClick={() => {
          navigator.clipboard.writeText(hexColor);
          alertToast(`${hexColor} Copied!`);
        }}
      >
        {/* <p className="color-palettes-generator-percent-value">{weight}%</p> */}
        <p className="color-palettes-generator-color-value">{hexColor}</p>
      </article>
    </>
  );
};

export default SingleColor;
