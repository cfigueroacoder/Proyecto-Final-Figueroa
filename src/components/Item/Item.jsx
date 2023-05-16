import { Link } from 'react-router-dom';

// carta de producto que se muestra en la pagina principal y las categorias
export const Item = ({item}) => {
    return (
        <Link className='item-card' to={`/item/${item.id}`}>
            <img src={item.img} alt={`Imagen de ${item.name}`} />
            <div className="body">
                <p className="name">{item.name}</p>
                <p className="value">$ {item.value}</p>
                {/*<p className="installments">6 cuotas sin interés de $ {(item.value / 6).toFixed(2)}</p>*/}
            </div>
        </Link>
    );
}
