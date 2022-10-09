import React, { useContext } from 'react'
import AppContext from "../Context/AppContext";
import './App.scss';
import Pokedex from '../Pokedex';
// import Header from '../Header'
import Loading from '../Loading';

function App() {
  const { fetching } = useContext(AppContext);
  return (
    <div className="App">
      {fetching ? <Loading classe='fullScreen'/> : <Pokedex />}
    </div>
  );
}

export default App;
