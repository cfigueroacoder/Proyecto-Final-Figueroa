import cart from '../../img/cart.png'

import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const { getItemAmount } = useCartContext()
    return (
        <>
            <img src={cart} alt='icono carrito'/>{getItemAmount() > 0 && <span className='cart-amount'>{getItemAmount()}</span>}
        </>
    );
}
