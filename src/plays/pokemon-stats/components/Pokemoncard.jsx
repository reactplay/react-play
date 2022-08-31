import React from "react";
import "./pokecard.css";
const Pokemoncard = (props) => {
  const { pokemon } = props;
  return (
    <div className="poke-card-cont">
      <div class="wrapper">
        <div class="pokemon-card pokemon">
          <div class="pokemon-card__image pokemon-card__image--pokemon">
            <img src={pokemon.sprites.front_default} alt="pokemon" />
          </div>
          <div class="poke-name">{pokemon.species.name}</div>

          <div class="pokemon-stats">
            <div class="one-third">
              <div class="stat">HP:</div>
              <div class="stat-value"> {pokemon.stats[0].base_stat} </div>
            </div>

            <div class="one-third">
              <div class="stat">ATTACK:</div>
              <div class="stat-value">{pokemon.stats[1].base_stat}</div>
            </div>

            <div class="one-third no-border">
              <div class="stat">DEFENSE:</div>
              <div class="stat-value">{pokemon.stats[2].base_stat}</div>
            </div>

            <div class="one-third no-border">
              <div class="stat">TYPE:</div>
              <div class="stat-value">{pokemon.types[0].type.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemoncard;
