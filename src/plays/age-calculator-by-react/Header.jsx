/* eslint-disable react/prop-types */

function Header({ onReset }) {
  return (
    <div>
      <h3>Age Calculator</h3>
      <button id="reset" type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Header;
