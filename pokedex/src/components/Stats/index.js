import React from "react";
import './style.scss';

const Stats = (props) => {
  const { stats } = props;
  return(
  <div className="Stats">
    <>
    <div className="stat"> 
      <div className="stat-name hp"> HP </div>
      <div className="stat-value"> {stats.hp}</div>
    </div>
    <div className="stat"> 
      <div className="stat-name attack"> Attack </div>
      <div className="stat-value"> {stats.attack}</div>
    </div>
    <div className="stat"> 
      <div className="stat-name defese"> Defense </div>
      <div className="stat-value"> {stats.defense}</div>
    </div>
    <div className="stat"> 
      <div className="stat-name spattack"> Sp.Attack </div>
      <div className="stat-value"> {stats.specialAttack}</div>
    </div>
    <div className="stat"> 
      <div className="stat-name spdeffese"> Sp.Defense </div>
      <div className="stat-value"> {stats.specialDefese}</div>
    </div>
    <div className="stat"> 
      <div className="stat-name speed"> Speed </div>
      <div className="stat-value"> {stats.speed}</div>
    </div>
    </>

  </div>
  )
}

export default Stats;