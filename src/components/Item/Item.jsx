import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    return (
        <Link className='nav-link card item-list-card' to={`/item/${item.id}`}>
            <img src={item.img} alt={`Imagen de ${item.name}`} />
            <div className="item-list-card-body card-body">
                <p className="item-list-card-title">{item.name}</p>
                <p className="item-list-card-value">$ {item.value}</p>
                <p className="item-list-card-installments">6 cuotas sin interés de $ {(item.value / 6).toFixed(2)}</p>
            </div>
        </Link>
    );
}
