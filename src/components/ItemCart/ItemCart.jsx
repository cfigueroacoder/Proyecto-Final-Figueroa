import { useCartContext } from "../../context/CartContext";

export const ItemCart = ({ item }) => {
    const { removeItem } = useCartContext()
    return (
        <div className="card catalog-card mb-3 cardCart">
            <div className="row g-0">
                <img src={item.img} className="card-img-top" alt={`Imagen de ${item.name}`} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.vendor} {item.name}</h5>
                    <p className="card-text">Cantidad: {item.amount}</p>
                    <p className="card-text">Precio Unitario: ${item.value}</p>
                    <p className="card-text">Subtotal: ${item.value * item.amount}</p>
                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Quitar</button>
                </div>
            </div>
        </div>
    );
}
