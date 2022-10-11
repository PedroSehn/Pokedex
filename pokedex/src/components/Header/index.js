import React from 'react'
import './style.scss'
import pokeomonLogo from '../../images/utils/pokemon-logo.png';
const Header = () => {
    return (
    <header className='header'> 
        <img className='title' src={pokeomonLogo} alt='pokemon logo'/>
    </header>);
};

export default  Header
 