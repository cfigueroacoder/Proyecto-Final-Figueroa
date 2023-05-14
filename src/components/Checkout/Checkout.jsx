import { useRef } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder, getProduct, updateProduct } from '../../firebase/firebase';

export const Checkout = () => {

    const clientForm = useRef() // Crear una referencia para consultar los valores actuales del formulario
    const { cart, getTotal, emptyCart } = useCartContext()

    let navigate = useNavigate()

    const submitForm = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()
        const clientFormData = new FormData(clientForm.current) // pasar de HTML a objeto iterable
        const clientData = Object.fromEntries(clientFormData) // pasar de objeto iterable a objeto simple

        const aux =[...cart]
        aux.forEach(item => {
            getProduct(item.id)
                .then(queryItem => {
                    if(queryItem.stock >= item.amount) {
                        queryItem.stock -= item.amount
                        updateProduct(queryItem.id, queryItem)
                    } else {
                        console.log(`stock insuficiente para producto de id: ${queryItem.id}`)
                    }
                })
        })

        createOrder(clientData, getTotal(), aux.map(item => ({ id: item.id, amount: item.amount, value: item.value })), new Date().toISOString())
            .then(order => {
                emptyCart()
                e.target.reset()
                navigate('/')
             })
             .catch(e => console.error(e))
                     
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
