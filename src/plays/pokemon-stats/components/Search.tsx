import React from "react";
import "./search.css";
type SearchProps = {
  onEventChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchPokemonDetails: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
};

const Search = (props: SearchProps) => {
  const { onEventChange, fetchPokemonDetails, name } = props;
  return (
    <div className="poke-main-cont">
      <div className="poke-input-cont field">
        <form onSubmit={fetchPokemonDetails} className="poke-form">
          <input
            type="input"
            value={name}
            className="poke-input-field"
            placeholder=" "
            name="name"
            id="name"
            required
            onChange={onEventChange}
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
export default Search;
