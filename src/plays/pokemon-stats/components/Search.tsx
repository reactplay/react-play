import React from 'react';
import './search.css';
type SearchProps = {
  onEventChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchPokemonDetails: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
};

const Search = (props: SearchProps) => {
  const { onEventChange, fetchPokemonDetails, name } = props;

  return (
    <div className="poke-main-cont">
      <div className="poke-input-cont field">
        <form className="poke-form" onSubmit={fetchPokemonDetails}>
          <input
            required
            className="poke-input-field"
            id="name"
            name="name"
            placeholder=" "
            type="input"
            value={name}
            onChange={onEventChange}
          />
          <label className="poke-form-label" htmlFor="name">
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
