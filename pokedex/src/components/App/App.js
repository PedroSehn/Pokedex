import React, { useContext, useEffect } from 'react'
import AppContext from "../Context/AppContext";
import './App.scss';
import Pokedex from '../Pokedex';
import Header from '../Header';
import Footer from '../Footer';
import Loading from '../Loading';
import ReactModal from 'react-modal';
import PokemonModal from '../Modal';

ReactModal.setAppElement('#root');

function App() {
  const { fetching, modal, setModal } = useContext(AppContext);
  
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="App">
      <ReactModal 
      isOpen={modal}
      ariaHideApp={false}
      onRequestClose={() => setModal(false)}>
        <PokemonModal/>
      </ReactModal>
      <Header />
      {fetching ? <Loading classe='fullScreen'/> : <Pokedex />}
      <Footer />
    </div>
  );
}

export default App;
