import { Item } from '../Item/Item';
import { ItemCart } from '../ItemCart/ItemCart';

// lista de cartas de producto que se muestran en el carrito o en la pagina principal y categorias, pasado por template
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
