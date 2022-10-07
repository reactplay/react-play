import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import "./styles.css";
import axios from "axios";
import Pokemoncard from "./components/Pokemoncard";
import Search from "./components/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Root } from "./typing";

// WARNING: Do not change the entry componenet name
function PokemonStats(props: any) {
  // Your Code Start below.
  const [pokemon, setpokemon] = useState<Root>();
  const [Name, onSetName] = useState<string>("");
  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
     onSetName(e.target.value);
  };
  const fetchPokemonDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${Name.toLowerCase()}`)
      .then((response) => {
        setpokemon(response.data);
      })
      .catch((err) => {
        toast.error("Pokemon you are searching is not found, try another.", {
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
        {/* Your Code Starts Here */}
        <div className="skeleton-pokemon-app">
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
                eventchange={handleSetName}
                Name={Name}
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
