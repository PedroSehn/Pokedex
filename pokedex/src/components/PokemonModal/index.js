import React, { useContext, useEffect, useState } from 'react'
import AppContext from "../Context/AppContext";
import {findEnglish} from '../../utils/filterData';
import Stats from '../Stats';
import Types from '../../images/types'
import './style.scss';
import BackIcon from '../../images/utils/Back.svg';

const PokemonModal = () => {
  const { setModal, clickedPokemon } = useContext(AppContext);

  const handleClick = (e) => {if(e.target.id === 'modal') setModal(false)}
  
  useEffect(() => {
    const clearData = [];
   const Habilities = clickedPokemon.abilities.map(async(item) => {
      const { abilitieName, url } = item;
      const response = await fetch(url);
      const result = await response.json();
      const englishDesc = await findEnglish(result)
      clearData.push({ name: abilitieName, desc: englishDesc })
    })
    Promise.all(Habilities);
  }, [])

  return(
  <div id={'modal'}className='Modal' onClick={handleClick}>
    <div className='Content'>
      <div className={`imageParent ${clickedPokemon.types[0]}`}>
        <img src={clickedPokemon.sprites.male} alt='pokemon-sprite' key={'pokemon-sprite'}/>
      </div>
      <div className='pokemonInfo'>
        <div className='name-types'>
          <div className='name'>{clickedPokemon.name}</div>
          <div className='types'>
            {clickedPokemon.types.map((type) => 
            <img className='typeImg' src={Types[`${type}`] } alt='pokemontype' key={`${type}`}/>)}
          </div>
        </div>
        <div className='dinaimcInfo'>
        <Stats stats={clickedPokemon.stats}/>
        </div>
      </div>
      <div className='buttonParent'>
      <button onClick={() => setModal(false)}><img src={BackIcon} alt='goback'/></button>
      </div>
      
    </div>
  </div>)
}

export default PokemonModal;