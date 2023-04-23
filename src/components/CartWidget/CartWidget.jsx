import cart from '../../img/cart.png'

import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const { getItemQuantity } = useCartContext()
    return (
        <>
            <img src={cart} alt='icono carrito'/>{getItemQuantity() > 0 && <span className='cart-amount'>{getItemQuantity()}</span>}
        </>
    );
}
