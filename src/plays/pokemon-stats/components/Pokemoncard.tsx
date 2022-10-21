import React from "react";
import { Props } from "../types";
import "./pokecard.css";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


const Pokemoncard = (props: Props) => {
  const { pokemon } = props;
  let pokemontype = pokemon.types[0].type.name + " type"
  const data = {
    labels: ['HP', 'ATTACK','SPECIAL-ATTACK',"SPEED", "DEFENSE",],
    datasets: [
      {
        label: pokemontype,
        data: [60, pokemon.stats[1].base_stat, pokemon.stats[3].base_stat, pokemon.stats[5].base_stat, pokemon.stats[2].base_stat,],
        backgroundColor: 'rgba(155, 99, 132, 0.2)',
        borderColor: 'rgba(5, 99, 132, 1)',
        borderWidth: 2,
        pointBorderWidth: 0,
      },
    ],
  };

  
  return (
    <div className="poke-card-cont">
      <div className="wrapper">
        <div className="pokemon-card pokemon">
          <div className="pokemon-card__image pokemon-card__image--pokemon">
            <img src={pokemon.sprites.front_default} alt="pokemon" />
          </div>
          <div className="poke-name">{pokemon.species.name}</div>

          <div className="pokemon-stats">
            {/* <div className="one-third">
              <div className="stat">HP:</div>
              <div className="stat-value">  </div>
            </div>

            <div className="one-third">
              <div className="stat">ATTACK:</div>
              <div className="stat-value">{}</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">DEFENSE:</div>
              <div className="stat-value">{}</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">TYPE:</div>
              <div className="stat-value"></div>
            </div> */}
            <Radar data={data}  options={{color:"black"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemoncard;
