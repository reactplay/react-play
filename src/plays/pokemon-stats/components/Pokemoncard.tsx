import React from "react";
import "./pokecard.css";
export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface Props {
  name: string;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export interface final {
  pokemon: Props;
};
const Pokemoncard = (props: final) => {
  const { pokemon } = props;
  return (
    <div className="poke-card-cont">
      <div className="wrapper">
        <div className="pokemon-card pokemon">
          <div className="pokemon-card__image pokemon-card__image--pokemon">
            <img src={pokemon.sprites.front_default} alt="pokemon" />
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
        </div>
      </div>
    </div>
  );
};

export default Pokemoncard;
