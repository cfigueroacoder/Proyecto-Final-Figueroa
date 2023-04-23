import { useRef } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Checkout = () => {

    const clientForm = useRef() // Crear una referencia para consultar los valores actuales del formulario
    const { cart, getTotalPrice, emptyCart } = useCartContext()
    const submitForm = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()

        const clientFormData = new FormData(clientForm.current) // pasar de HTML a objeto iterable
        const clientData = Object.fromEntries(clientFormData) // pasar de objeto iterable a objeto simple

        console.log(clientData)

        e.target.reset()
    }

    return (
        <>
            {cart.length === 0 ?
            <>
                <h2>Para proceder con la compra deben haber productos en el carrito</h2>
                <Link className='nav-link' to={"/"}>
                    <button className='btn btn-primary'>Volver al Inicio
                    </button>
                </Link>
            </>
            :            
            <div className='container divForm' >
                <form onSubmit={submitForm} ref={clientForm}>
                    <div className="mb3">
                        <label htmlFor="name" className='form-label'>Nombre y Apellido</label>
                        <input type="text" className='form-control' name='name' required={true}/>
                    </div>
                    <div className="mb3">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' name='email' required={true} />
                    </div>
                    <div className="mb3">
                        <label htmlFor="email2" className='form-label'>Repetir Email</label>
                        <input type="email" className='form-control' name='email2' required={true} />
                    </div>
                    <div className="mb3">
                        <label htmlFor="dni" className='form-label'>DNI</label>
                        <input type="number" className='form-control' name='dni' required={true} />
                    </div>
                    <div className="mb3">
                        <label htmlFor="phone" className='form-label'>Numero Telefónico</label>
                        <input type="tel" className='form-control' name='phone' required={true} />
                    </div>
                    <div className="mb3">
                        <label htmlFor="address" className='form-label'>Dirección</label>
                        <input type="text" className='form-control' name='address' required={true} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Finalizar Compra</button>
                </form>
            </div>
            }
        </>
    );
}
