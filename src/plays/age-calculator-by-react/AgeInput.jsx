/* eslint-disable react/prop-types */

function Input({ onSubmit, onChange }) {
  return (
    <form className="inputs-wrapper" onSubmit={onSubmit}>
      <input required id="date-input" name="age" type="date" onChange={onChange} />

      <button id="btn" type="submit">
        Calculate
      </button>
    </form>
  );
}

export default Input;
