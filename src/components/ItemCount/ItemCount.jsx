import { useCount } from "../../hooks/useCount";

export const ItemCount = ({initialValue, min, max}) => {

    const {count, incrementCounter, decrementCounter, resetCounter} = useCount(initialValue, min, max)

    return (
        <>
            <button className="btn btn-dark" onClick={decrementCounter}>-</button>
            {count}
            <button className="btn btn-dark" onClick={incrementCounter}>+</button>
            <button className="btn btn-dark" onClick={resetCounter}>Reset</button>
            <button className="btn btn-light">Agregar al carrito</button>
        </>
    );
}
