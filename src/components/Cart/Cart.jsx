import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const Cart = () => {
    const { cart, getTotalPrice, emptyCart } = useCartContext()
    return (
        <>
            {
                cart.length === 0 ?
                    <>
                        <h1>Carrito Vacio</h1>
                        <button className="btn btn-dark"><Link to={"/"} className="nav-link">Seguir Comprando</Link></button>
                    </>
                    :
                    <div className="container cartContainer">
                        {<ItemList products={cart} template={"itemCart"}/>}
                        <div className="cartButtons">
                            <p>Resumen de la compra: ${getTotalPrice()}</p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <button className="btn btn-dark"><Link to={"/"} className="nav-link">Seguir Comprando</Link></button>
                            <button className="btn btn-dark"><Link to={"/checkout"} className="nav-link">Finalizar Compra</Link></button>
                        </div>
                    </div>

            }
        </>
    );
}
