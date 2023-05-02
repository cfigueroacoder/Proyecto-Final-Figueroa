import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from '../ItemList/ItemList';
import { useDarkModeContext } from '../../context/DarkModeContext';

import { getProducts } from '../../firebase/firebase';

import './ItemListContainer.css';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { category } = useParams()
    const { darkMode } = useDarkModeContext()

    useEffect(() => {
        getProducts()
            .then(query => {
                const filteredQuery = query.filter(product => product.stock > 0)
                setProducts(filteredQuery)
                if(category) {
                    const categorizedQuery = filteredQuery.filter(product => product.category === category)
                    setProducts(categorizedQuery)
                }      
                })
    }, [category])

    return (
        <div className='row product-container'>
            <ItemList products={products} template="Item" />
        </div>
    );
}
