import { useCount } from "../../hooks/useCount";

//contador de productos para agregar al carrito, que se agrega desde la pagina de detalle de algun producto
export const ItemCount = ({ initialValue, min, max, onAdd }) => {

    const {count, incrementCounter, decrementCounter} = useCount(initialValue, min, max)

    return (
        <div className="item-detail-buttons">
            {// revisamos si max esta definido para no mostrar botones mientras se carga la página
                max === undefined ? <></>:
                !max ?
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
