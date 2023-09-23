import React from 'react';
import { Props } from '../types';
import './pokecard.css';
const Pokemoncard = (props: Props) => {
  const { pokemon, backToSearch } = props;

  return (
    <div className="poke-card-cont">
      <div className="wrapper">
        <div className="pokemon-card pokemon">
          <div className="pokemon-card__image pokemon-card__image--pokemon">
            <img alt="pokemon" src={pokemon.sprites.front_default} />
          </div>
          <div className="poke-name">{pokemon.species.name}</div>

          <div className="pokemon-stats">
            <div className="one-third">
              <div className="stat">HP:</div>
              <div className="stat-value"> {pokemon.stats[0].base_stat} </div>
            </div>

            <div className="one-third">
              <div className="stat">ATTACK:</div>
              <div className="stat-value">{pokemon.stats[1].base_stat}</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">DEFENSE:</div>
              <div className="stat-value">{pokemon.stats[2].base_stat}</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">TYPE:</div>
              <div className="stat-value">{pokemon.types[0].type.name}</div>
            </div>
          </div>

          <button className="poke-stats-back-btn" type="button" onClick={backToSearch}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemoncard;
