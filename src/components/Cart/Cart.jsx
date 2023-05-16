import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const Cart = () => {
    const { cart, getTotal, emptyCart } = useCartContext()
    return (
        <>
            {
                cart.length === 0 ?
                    <div className="empty-cart">
                        <p>Tu carrito esta vacío</p>
                        <Link to={"/"}><button>Volver a la tienda</button></Link>
                    </div>
                    :
                    <div className="cart-container">
                        <div className="cart-card-container">
                            {<ItemList products={cart} template={"itemCart"}/>}
                        </div>
                        <div className="cart-info">
                            <p>Total de la compra: ${getTotal()}</p>
                            <hr />
                            <div className="cart-buttons">
                                <button className="empty" onClick={() => emptyCart()}>Vaciar Carrito</button>
                                {/*<button className="btn btn-dark"><Link to={"/"} className="nav-link">Seguir Comprando</Link></button>*/}
                                <Link to={"/checkout"}><button className="proceed">Ir a Checkout</button></Link>
                            </div>
                        </div>
                    </div>

            }
        </>
    );
}
