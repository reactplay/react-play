import { showToastMessage } from './utils';

const SingleColor = ({ index, hexColor }) => {
  const CopyClipboardError = 'Unable to copy hex code';

  const handleCopyHexCode = async () => {
    try {
      await navigator.clipboard.writeText(hexColor);
      showToastMessage(`${hexColor} Copied!`);
    } catch (error) {
      throw CopyClipboardError;
    }
  };

  return (
    <article
      className={`color-palettes-generator-color ${
        index > 10 && 'color-palettes-generator-color-light'
      }`}
      style={{ backgroundColor: `${hexColor}` }}
      onClick={handleCopyHexCode}
    >
      <p className="color-palettes-generator-color-value">{hexColor}</p>
    </article>
  );
};

export default SingleColor;
