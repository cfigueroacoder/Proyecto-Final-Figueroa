import React from 'react';
import './Navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <nav className='nav-list'>
            <li className='nav-cat nav-brand'>CLICK DERECHO</li>
            <li className='nav-cat'>Celulares</li>
            <li className='nav-cat'>Notebooks</li>
            <li className='nav-cat'>Monitores</li>
            <li className='nav-cat'>Periféricos</li>
            <li className='nav-cat nav-cart'><CartWidget /></li>
        </nav>
    );
}