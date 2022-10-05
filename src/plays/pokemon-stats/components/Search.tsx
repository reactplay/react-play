import React from "react";
import "./search.css";

type Props = {
  setname: React.Dispatch<React.SetStateAction<string>>,
  name: string,
  fetchPokemonDetails:  (e: React.FormEvent<HTMLFormElement>) => void
}
const search = (props: Props) => {
  const { setname, fetchPokemonDetails, name } = props;
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
            onChange={(e) => setname(e.target.value)}
          />
          <label htmlFor="name" className="poke-form-label">
            Pokemon name
          </label>
          <input className="poke-stats-sumbit-btn" type="sumbit">
            Search
          </input>
        </form>
      </div>
    </div>
  );
};

export default search;
