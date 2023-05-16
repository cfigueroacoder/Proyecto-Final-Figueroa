import { useRef, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder, getProduct, updateProduct } from '../../firebase/firebase';

export const Checkout = () => {

    const clientForm = useRef() // Crear una referencia para consultar los valores actuales del formulario
    const { cart, getTotal, emptyCart } = useCartContext()

    let navigate = useNavigate()

    const [warning, setWarning] = useState(``)

    const submitForm = (e) => {
        e.preventDefault()
        const clientData = Object.fromEntries(new FormData(clientForm.current)) // obtener los datos del cliente del formulario
        const aux =[...cart]
        
        if(clientData.email !== clientData.email2) { // si los email no son los mismos, no proceder con la compra y informar al usuario
            setWarning(`Los emails ingresados son diferentes`)
            return
        }

        // por cada item en el carrito revisamos si hay suficiente stock, si hay lo restamos del inventario.
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

        // creamos la orden y la guardamos en firebase, omostrando al usuario un mensaje de confirmacion
        createOrder(clientData, getTotal(), aux.map(item => ({ id: item.id, amount: item.amount, value: item.value })), new Date().toISOString())
            .then(order => {
                alert(`Muchas gracias por tu compra! Nos comunicaremos pronto para coordinar el pago y la entrega. Código de orden [${order.id}]`);
                emptyCart()
                e.target.reset()
                navigate('/')
             })
             .catch(e => console.error(e))
                     
    }

    return (
        <div className='checkout-container'>
            {cart.length === 0 ?
            <div className='checkout-empty'>
                <p>Para proceder con la compra deben haber productos en el carrito</p>
                <Link to={"/"}><button>Volver a la tienda</button></Link>
            </div>
            :
            <>
                <p className='title'>Ingrese sus datos para finalizar la orden</p>
                <p className='detail'>{warning}</p>
                <form className='checkout-form' onSubmit={submitForm} ref={clientForm}>
                    <label htmlFor="name" className='form-label'>Nombre y Apellido</label>
                    <input type="text" className='' name='name' required={true}/>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" className='' name='email' required={true} />
                    <label htmlFor="email2" className='form-label'>Repetir Email</label>
                    <input type="email" className='' name='email2' required={true} autocomplete="off" />
                    <label htmlFor="dni" className='form-label'>DNI</label>
                    <input type="number" className='' name='dni' required={true} />
                    <label htmlFor="phone" className='form-label'>Numero Telefónico</label>
                    <input type="tel" className='' name='phone' required={true} />
                    <label htmlFor="address" className='form-label'>Dirección</label>
                    <input type="text" className='' name='address' required={true} />
                    <div className="button-panel">
                        <Link to={'/cart'}> <button className='btn btn-primary'>Volver al carrito</button></Link>
                        <button type='submit' className='proceed'>Finalizar Compra</button>
                    </div>
                </form>
            </>            
            }
        </div>
    );
}
