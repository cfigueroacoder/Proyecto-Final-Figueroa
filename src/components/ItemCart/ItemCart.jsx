import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ItemCart = ({ item }) => {
    const { removeItem } = useCartContext()
    return (
        <div className='item-card'>
            <img src={item.img} alt={`Imagen de ${item.name}`} />
            <button className="remove" onClick={() => removeItem(item.id)}>x</button>
            <Link className="body"  to={`/item/${item.id}`}>
                <p className="name">{item.name}</p>
                <p className="amount">Cantidad: {item.amount}</p>
                <p className="value">Precio Unitario: ${item.value}</p>
                <p className="total">Subtotal: ${item.value * item.amount}</p>
            </Link>
        </div>
    );
}
