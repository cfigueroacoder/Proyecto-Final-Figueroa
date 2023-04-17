import './Navbar.css'

import { Link } from 'react-router-dom';

import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <nav className='nav-list'>
            <Link className='nav-link' to={'/'}><li className='nav-cat nav-brand'>CLICK DERECHO</li></Link>
            <Link className='nav-link' to={'/catalog/phone'}><li className='nav-cat'>Celulares</li></Link>
            <Link className='nav-link' to={'/catalog/notebook'}><li className='nav-cat'>Notebooks</li></Link>
            <Link className='nav-link' to={'/catalog/tv'}><li className='nav-cat'>Televisores</li></Link>
            <Link className='nav-link' to={'/catalog/monitor'}><li className='nav-cat'>Monitores</li></Link>
            <Link className='nav-link' to={'/catalog/peripheral'}><li className='nav-cat'>Periféricos</li></Link>
            <Link className='nav-link' to={'/cart'}><li className='nav-cat nav-cart'><CartWidget /></li></Link>
        </nav>
    );
}
