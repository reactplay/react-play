import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import "./styles.css";
import axios from "axios";
import Pokemoncard from "./components/Pokemoncard";
import Search from "./components/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// WARNING: Do not change the entry componenet name
function PokemonStats(props) {
  // Your Code Start below.
  const [pokemon, setpokemon] = useState();
  const [name, setname] = useState("");
  const fetchPokemonDetails = (e) => {
    e.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((response) => {
        setpokemon(response.data);
      })
      .catch((err) => {
        toast.error("Sorry, Unable to fetch", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="Skeleton-pokemon-app">
          {/* Your Code Starts Here */}
          <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {pokemon ? (
            <div className="poke-card-container">
              <Pokemoncard pokemon={pokemon} />
            </div>
          ) : (
            <div className="poke-search-container">
              <Search
                setname={setname}
                name={name}
                fetchPokemonDetails={fetchPokemonDetails}
              />
            </div>
          )}
          </div>
          {/* Your Code Ends Here */}
        </div>
    </>
  );
}

export default PokemonStats;
