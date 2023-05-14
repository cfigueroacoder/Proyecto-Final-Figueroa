import { ItemCount } from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

export const ItemDetail = ({item}) => {
    const { addItem } = useCartContext()

    const onAdd = (addCounter) => {
        addItem(item, addCounter)
    }

    return (
        <>
            <img src={item.img} alt={`Imagen de ${item.name}`} className="item-detail-img" />
            <div className="item-detail-right">
                <div className="item-detail-info">
                    <p className="name">{item.name}</p>
                    <p className="vendor">{item.vendor}</p>
                    <p className="value">$ {item.value}</p>
                    <p className="stock">Stock: {item.stock}</p>
                </div>
                <hr />
                <ItemCount  initialValue={1} min={1} max={item.stock} onAdd={onAdd}/>
            </div>
        </>
    );
}
