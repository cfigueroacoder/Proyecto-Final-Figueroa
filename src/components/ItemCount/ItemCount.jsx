import { useCount } from "../../hooks/useCount";

export const ItemCount = ({ initialValue, min, max, onAdd }) => {

    const {count, incrementCounter, decrementCounter} = useCount(initialValue, min, max)

    return (
        <div  className="item-detail-buttons">
            <button className="change" onClick={decrementCounter}>-</button>
            <div>{count}</div>
            <button className="change" onClick={incrementCounter}>+</button>
            <button className="add-to-cart" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
}
