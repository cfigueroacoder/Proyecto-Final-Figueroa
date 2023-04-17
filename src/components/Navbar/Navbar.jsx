import './Navbar.css'

import { Link } from 'react-router-dom';

import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <nav className='nav-list'>
            <Link className='nav-link' to={'/'}><li className='nav-cat nav-brand'>CLICK DERECHO</li></Link>
            <li className='nav-cat'>Celulares</li>
            <li className='nav-cat'>Notebooks</li>
            <li className='nav-cat'>Televisores</li>
            <li className='nav-cat'>Monitores</li>
            <li className='nav-cat'>Periféricos</li>
            <li className='nav-cat nav-cart'><CartWidget /></li>
        </nav>
    );
}
