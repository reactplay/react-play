import React from 'react'
import './pokecard.css'
const Pokemoncard = (props) => {
  const {pokemon} =props;
  return (
    <div className='cont'> 
      {/* <div className='Pokemoncard'>
        <h1>{pokemon.species.name}</h1>
        <div className='imageinfo'>
          <img src={pokemon.sprites.front_default} alt='' />
        </div>
        <div className='pokemondetails'>
            <h3>HP: {pokemon.stats[0].base_stat}</h3>
            <h3>Attack: {pokemon.stats[1].base_stat}</h3>
            <h3>Defense: {pokemon.stats[2].base_stat}</h3>
            <h3>Type: {pokemon.types[0].type.name}</h3>
        </div>
      </div> */}
      <div class="wrapper">
    <div class="clash-card barbarian">
      <div class="clash-card__image clash-card__image--barbarian">
        <img src={pokemon.sprites.front_default} alt="barbarian"/>
      </div>
      <div class="name">{pokemon.species.name}</div>

      <div class="powers">
        <div class="one-third">
          <div class="stat-value">HP:</div>
          <div class="stat"> {pokemon.stats[0].base_stat} </div>
        </div>

        <div class="one-third">
          <div class="stat-value">ATTACK:</div>
          <div class="stat">{pokemon.stats[1].base_stat}</div>
        </div>

        <div class="one-third no-border">
          <div class="stat-value">DEFENSE:</div>   
          <div class="stat">{pokemon.stats[2].base_stat}</div>
        </div>

        <div class="one-third no-border">
          <div class="stat-value">TYPE:</div>   
          <div class="stat">{pokemon.types[0].type.name}</div>
        </div>

      </div>

    </div>
  </div>
    </div>
  )
}

export default Pokemoncard