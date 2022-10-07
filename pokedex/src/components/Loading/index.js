import React from "react";
import pokeball from '../../images/utils/pokeball_anim.gif'
import './style.scss'

const Loading = () => {
  return(
  <div className="Loading">
    <img src={pokeball} alt='pokeball' className="pokeball-gif"/>
    <div className="loading-text"> Loading </div>
  </div>
  )
}

export default Loading