import React, { useContext, useEffect } from 'react'
import AppContext from "../Context/AppContext";
import './App.scss';
import Pokedex from '../Pokedex';
import Header from '../Header';
import Footer from '../Footer';
import Loading from '../Loading';

function App() {
  const { fetching } = useContext(AppContext);
  
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="App">
      <Header />
      {fetching ? <Loading classe='fullScreen'/> : <Pokedex />}
      <Footer />
    </div>
  );
}

export default App;
