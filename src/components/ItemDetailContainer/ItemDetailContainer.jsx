import { useEffect, useState } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProduct(id).then(query => { setItem(query) })
    }, [id])
    
    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />
        </div>
    );
}
