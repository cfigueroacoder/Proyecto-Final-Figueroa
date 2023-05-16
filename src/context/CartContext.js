import { useState, createContext, useContext } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const isInCart = (queryID) => {
        return cart.some(item => item.id === queryID)
    }

    const addItem = (item, amount) => {
        if(isInCart(item.id)) { // si ya hay de este producto en el carrito actualizamos la cantidad
            const newCart = [...cart]
            newCart[cart.findIndex(queryItem => queryItem.id === item.id)].amount = amount

            setCart(newCart)
        } else { // si no hay, lo agregamos
            const newItem = {
                ...item,
                amount
            }

            setCart([...cart, newItem])
        }
    }

    const removeItem = (itemID) => {
        setCart(cart.filter(filterItem => filterItem.id !== itemID))
    }

    const emptyCart = () => setCart([])

    const getItemAmount = () => {
        return cart.reduce((accum, item) => accum += item.amount, 0)
    }

    const getTotal = () => {
        return cart.reduce((accum, item) => accum += (item.amount * item.value), 0)
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart, getItemAmount, getTotal }}>
            {props.children}
        </CartContext.Provider>
    )
}