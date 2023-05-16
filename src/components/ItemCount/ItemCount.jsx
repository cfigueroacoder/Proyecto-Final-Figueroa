import { useCount } from "../../hooks/useCount";

export const ItemCount = ({ initialValue, min, max, onAdd }) => {

    const {count, incrementCounter, decrementCounter} = useCount(initialValue, min, max)

    if (max < min)
        console.log("no stock of item")

    return (
        <div className="item-detail-buttons">
            {
                max < min ?
                <p>Producto fuera de stock</p>
                :
                <>
                    <div>
                        <button className="change" onClick={decrementCounter}>-</button>
                        <div>{count}</div>
                        <button className="change" onClick={incrementCounter}>+</button>
                    </div>
                    <button className="add-to-cart proceed" onClick={() => onAdd(count)}>Agregar al carrito</button>
                </>
            }
        </div>
    );
}
