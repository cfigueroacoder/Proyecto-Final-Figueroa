import { useEffect, useState } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch('/json/db.json')
            .then(response => response.json())
                .then(query => {
                    const item = query.find(queryItem => queryItem.id === parseInt(id))
                    setItem(item)
                })
    }, [])
    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />
        </div>
    );
}
