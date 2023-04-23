import { useState, createContext, useContext } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    //buscar producto

    const isInCart = (queryID) => {
        return cart.some(item => item.id === queryID)
    }

    const addItem = (item, amount) => {
        if(isInCart(item.id)) {
            const newCart = [...cart]
            newCart[cart.findIndex(queryItem => queryItem.id === item.id)].amount = amount

            setCart(newCart)
        } else {
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

    const getItemQuantity = () => {
        return cart.reduce((accum, item) => accum += item.amount, 0)
    }

    const getTotalPrice = () => {
        return cart.reduce((accum, item) => accum += (item.amount * item.value), 0)
    }    

    console.log(cart)

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart, getItemQuantity, getTotalPrice }}>
            {props.children}
        </CartContext.Provider>
    )
}