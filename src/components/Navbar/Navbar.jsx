import { Link } from 'react-router-dom';

import { CartWidget } from '../CartWidget/CartWidget'

// barra de navegacion global
// los links de catalogo se routean a itemListContainer, y la categoria se pasa por url

// categorias para popular la navbar
// el id debe coincidir con los de firebase, o no se mostraran productos 
const categories = [
    { id: "motherboard", text: "Placas Madre" },
    { id: "cpu", text: "Procesadores" },
    { id: "gpu", text: "Placas de Video" },
    { id: "ram", text: "Memoria RAM" },
    { id: "storage", text: "Almacenamiento" },
    { id: "monitor", text: "Monitores" },
    { id: "peripheral", text: "Periféricos" }
]

export const Navbar = () => {
    return (
        <nav className='navbar-list'>
            <Link className='navbar-category navbar-brand' to={'/'}>Tienda CD</Link>
            {categories.map(category => <Link className='navbar-category' to={`/catalog/${category.id}`}>{category.text}</Link>)}
            <Link className='navbar-category navbar-cart' to={'/cart'}><CartWidget /></Link>
        </nav>
    );
}
