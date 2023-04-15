export const Item = ({item}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={`./img/${item.img}`} className="card-img-top" alt={`Imagen de ${item.name}`} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.vendor}</p>
                <p className="card-text">$ {item.value}</p>
            </div>
        </div>
    );
}
