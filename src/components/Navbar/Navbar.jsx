import React from 'react';
import './Navbar.css'
import { Cart } from '../Cart/Cart.jsx'

export const Navbar = () => {
    return (
        <ul className='nav-list'>
            <li className='nav-cat nav-brand'>CLICK DERECHO</li>
            <li className='nav-cat'>Placas Madre</li>
            <li className='nav-cat'>CPUs</li>
            <li className='nav-cat'>Placas de Video</li>
            <li className='nav-cat'>Memoria RAM</li>
            <li className='nav-cat'>Almacenamiento</li>
            <li className='nav-cat nav-cart'><Cart items={1} /></li>
        </ul>
    );
}