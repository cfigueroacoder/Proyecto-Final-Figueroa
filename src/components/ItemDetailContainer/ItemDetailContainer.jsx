import { useEffect, useState } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const[item, setItem] = useState([])
    useEffect(() => {
        fetch('./json/db.json')
            .then(response => response.json())
                .then(query => {
                    const item = query.find(queryItem => queryItem.id === 2)
                    setItem(item)
                })
    }, [])
    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />
        </div>
    );
}
