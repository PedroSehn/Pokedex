import React from 'react'
import ImageTypes from '../../images/types';
import './style.scss'

const Pokemon = (props) => {
  const { abilities, id, name, sprites, stats, types} = props.pokemon;
  return(
    <div className={`pokemon-card ${types[0]}`} key={`${id + name}`}>
      <div className='pokemon-number'>
        <span> {`No ${id}`} </span>
      </div>
      <div className='pokemon-immage'>
        <img src={sprites.static} alt='pokemon' />
      </div>
      
      <div className='pokemon-info-parent'>
        <div className='pokemon-name'> {name.toUpperCase()} </div>
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