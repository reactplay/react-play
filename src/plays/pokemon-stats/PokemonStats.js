import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import "./styles.css";
import axios from "axios";
import Pokemoncard from "./components/Pokemoncard";
import Search from "./components/Search";
// WARNING: Do not change the entry componenet name
function PokemonStats(props) {
  // Your Code Start below.
  const [pokemon, setpokemon] = useState();
  const [name, setname] = useState("");
  const Pokemon = (e) => {
    e.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      console.log(response.data);
      setpokemon(response.data);
    });
  };
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          {pokemon ? (
            <div className="poke-card-container">
              <Pokemoncard pokemon={pokemon} />
            </div>
          ) : (
            <div className="poke-search-container">
              <Search setname={setname} Pokemon={Pokemon} />
            </div>
          )}
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default PokemonStats;
