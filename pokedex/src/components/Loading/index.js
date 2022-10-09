import React from "react";
import pokeball from '../../images/utils/pokeball_anim.gif'

const Loading = (props) => {
  const { classe } = props;
  return(
  <div className={classe}>
    <img src={pokeball} alt='pokeball' className="pokeball-gif"/>
  </div>
  )
}

export default Loading