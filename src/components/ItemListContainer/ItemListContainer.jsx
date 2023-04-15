import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';

import './ItemListContainer.css';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./json/db.json')
            .then(response => response.json())
                .then(products => {
                    setProducts(products)
                })
    }, [])

    return (
        <div className='row product-container'>
            <ItemList products={products} />
        </div>
    );
}