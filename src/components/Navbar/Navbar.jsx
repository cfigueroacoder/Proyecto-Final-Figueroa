import { Link } from 'react-router-dom';

import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <nav className='navbar-list'>
            <Link className='nav-link navbar-category navbar-brand' to={'/'}>Tienda CD</Link>
            <Link className='nav-link navbar-category' to={'/catalog/phone'}>Celulares</Link>
            <Link className='nav-link navbar-category' to={'/catalog/notebook'}>Notebooks</Link>
            <Link className='nav-link navbar-category' to={'/catalog/tv'}>Televisores</Link>
            <Link className='nav-link navbar-category' to={'/catalog/monitor'}>Monitores</Link>
            <Link className='nav-link navbar-category' to={'/catalog/peripheral'}>Periféricos</Link>
            <Link className='nav-link navbar-category navbar-cart' to={'/cart'}><CartWidget /></Link>
        </nav>
    );
}
