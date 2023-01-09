import PlayHeader from 'common/playlists/PlayHeader';
import { useState } from 'react';
import './styles.css';
import axios from 'axios';
import Pokemoncard from './components/Pokemoncard';
import Search from './components/Search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { PlayRoot, Root } from './types';

// WARNING: Do not change the entry componenet name
function PokemonStats(props: PlayRoot) {
  // Your Code Start below.
  const [pokemon, setPokemon] = useState<Root>();
  const [name, onSetName] = useState<string>('');
  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetName(e.target.value);
  };
  const fetchPokemonDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch(() => {
        toast.error('Pokemon you are searching is not found, try another.', {
          position: 'bottom-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      });
  };

  // Clear the Searched pokemon
  const clearSearchedPokemon = () => {
    setPokemon(undefined);
    onSetName('');
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        {/* Your Code Starts Here */}
        <div className="skeleton-pokemon-app">
          <ToastContainer
            closeOnClick
            draggable
            pauseOnFocusLoss
            pauseOnHover
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            position="bottom-left"
            rtl={false}
          />
          {pokemon ? (
            <div className="poke-card-container">
              <Pokemoncard backToSearch={clearSearchedPokemon} pokemon={pokemon} />
            </div>
          ) : (
            <div className="poke-search-container">
              <Search
                fetchPokemonDetails={fetchPokemonDetails}
                name={name}
                onEventChange={handleSetName}
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
