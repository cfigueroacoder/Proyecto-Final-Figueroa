export const ItemDetail = ({item}) => {
    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={item.img} alt={`Imagen de ${item.name}`} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Marca: {item.vendor}</p>
                    <p className="card-text">Precio: {item.value}</p>
                    <button className="btn btn-secondary">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}
