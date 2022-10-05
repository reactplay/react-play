import React from "react";
import "./search.css";
type Propsi = {
  setname: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  fetchPokemonDetails: (e: React.FormEvent<HTMLFormElement>) => void;
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { type?: 'submit' }

const Button = ({ children, type, ...props }: Props) => (
  <button {...props} type={type || 'button'}>
    {children}
  </button>
)

const search = (props: Propsi) => {
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
          <Button className="poke-stats-sumbit-btn" type="submit">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};
export default search;
