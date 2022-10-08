import React, { useContext } from 'react'
import AppContext from "../Context/AppContext";
import './App.css';
import Pokedex from '../Pokedex';
// import Header from '../Header'
import Loading from '../Loading';

function App() {
  const { fetching } = useContext(AppContext);
  return (
    <div className="App">
      {fetching ? <Loading /> : <Pokedex />}
    </div>
  );
}

export default App;
