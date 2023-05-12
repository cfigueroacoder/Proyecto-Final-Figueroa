import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    return (
        <Link className='nav-link card item-list-card' to={`/item/${item.id}`}>
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.name}`} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.vendor}</p>
                <p className="card-text">$ {item.value}</p>
            </div>
        </Link>
    );
}
