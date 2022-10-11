import React, { useContext } from 'react'
import AppContext from "../Context/AppContext";
const PokemonModal = () => {
  const { setModal, clickedPokemon } = useContext(AppContext)
  return (
  <div className='ModalContent'>
    <div className='ModalPokemonImage'>
    <img src={clickedPokemon.sprites.male} alt='pokemon-gif'/>
    </div>
     
    <button onClick={() => setModal(false)}></button>
  </div>)
}

export default PokemonModal;