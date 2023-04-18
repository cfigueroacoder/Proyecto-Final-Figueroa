import './Checkout.css'

import { useRef } from 'react';

export const Checkout = () => {

    const clientForm = useRef() // Crear una referencia para consultar los valores actuales del formulario

    const submitForm = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()

        const clientFormData = new FormData(clientForm.current) // pasar de HTML a objeto iterable
        const clientData = Object.fromEntries(clientFormData) // pasar de objeto iterable a objeto simple

        console.log(clientData)

        e.target.reset()
    }

    return (
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
    );
}
