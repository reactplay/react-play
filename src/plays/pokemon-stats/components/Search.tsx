import React from "react";
import "./search.css";
type SearchProps = {
  eventchange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchPokemonDetails: (e: React.FormEvent<HTMLFormElement>) => void;
  Name: string;
};
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const search = (props: SearchProps) => {
  const { eventchange, fetchPokemonDetails, Name } = props;
  return (
    <div className="poke-main-cont">
      <div className="poke-input-cont field">
        <form onSubmit={fetchPokemonDetails} className="poke-form">
          <input
            type="input"
            value={Name}
            className="poke-input-field"
            placeholder=" "
            name="name"
            id="name"
            required
            onChange={eventchange}
          />
          <label htmlFor="name" className="poke-form-label">
            Pokemon name
          </label>
          <button className="poke-stats-sumbit-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
export default search;
