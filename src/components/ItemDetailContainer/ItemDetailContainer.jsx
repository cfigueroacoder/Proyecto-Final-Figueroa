import { useEffect, useState } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";

// contenedor de detalle de producto que pasa informacion sobre el producto en especifico para ser dibujado
export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProduct(id)
            .then(query => { setItem(query) })
    }, [id])
    
    return (
        <div className="item-detail-container">
            <ItemDetail item={item} />
        </div>
    );
}
