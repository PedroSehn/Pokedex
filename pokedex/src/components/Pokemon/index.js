import React, { useContext } from 'react'
import ImageTypes from '../../images/types';
import AppContext from "../Context/AppContext";
import './style.scss'

const Pokemon = (props) => {
  const {  id, name, sprites, types} = props.pokemon;
  const { modalFunction } = useContext(AppContext);
  return(
    <div className={`pokemon-card ${types[0]}`} key={`${id}`} onClick={() => modalFunction(props.pokemon)}>
      <div className='pokemon-number'>
        <span> {`No ${id}`} </span>
      </div>
      <div className='pokemon-immage'>
        <img src={sprites.static} alt='pokemon' />
      </div>
      
      <div className='pokemon-info-parent'>
        <div className='pokemon-name'> {name} </div>
        <div className='types'>
          {types.map((type, index) => <img 
            src={ ImageTypes[type] } 
            alt='type' 
            className='pokemon-type' 
            key={`${type + index}`}/>)}
        </div>
      </div>
    </div>
  )
}

export default Pokemon;