import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from '../ItemList/ItemList';

import { getProducts } from '../../firebase/firebase';


// contenedor de la lista de productos que maneja con codigo el sorteo y filtrado de productos por categoria y stock y lo pasa a la lista
export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(() => {
        getProducts()
            .then(query => {
                const products = query.filter(product => product.stock > 0) // filtramos productos sin stock
                setProducts(products)
                if(category) { // si hay una categoria elegida filtramos los productos
                    const categoryProducts = products.filter(product => product.category === category)
                    setProducts(categoryProducts)
                }      
                })
    }, [category])

    return (
        <div className='item-list-container'>
            <ItemList products={products} template="Item" />
        </div>
    );
}
