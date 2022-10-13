import React, { useContext, useEffect } from 'react'
import AppContext from "../Context/AppContext";
import './App.scss';
import Pokedex from '../Pokedex';
import Header from '../Header';
import Footer from '../Footer';
import Loading from '../Loading';
import ReactModal from 'react-modal';
import PokemonModal from '../PokemonModal';

ReactModal.setAppElement('#root');

function App() {
  const { fetching, modal } = useContext(AppContext);
  
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  useEffect(() => {
    modal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [modal])

  return (
    <div className="App">
      { modal ? <PokemonModal/> : null }
      <Header />
      {fetching ? <Loading classe='fullScreen'/> : <Pokedex />}
      <Footer />
    </div>
  );
}

export default App;
