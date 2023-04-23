import { Item } from '../Item/Item';
import { ItemCart } from '../ItemCart/ItemCart';

export const ItemList = ({ products, template }) => {
    return (
        <>
            {
                template === "Item" ?
                    products.map(product => <Item key={product.id} item={product} />)
                :
                    products.map(product => <ItemCart key={product.id} item={product} />)
            }
        </>
    );
}
