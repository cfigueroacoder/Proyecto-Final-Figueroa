import React from 'react';
import cart from '../../img/cart.png'

export const Cart = ({items}) => {
    return (
        <>
            <img src={cart} alt='icono carrito'/>{items}
        </>
    );
}