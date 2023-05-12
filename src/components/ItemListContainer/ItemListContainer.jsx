import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from '../ItemList/ItemList';

import { getProducts } from '../../firebase/firebase';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(() => {
        getProducts()
            .then(query => {
                const products = query.filter(product => product.stock > 0)
                setProducts(products)
                if(category) {
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
