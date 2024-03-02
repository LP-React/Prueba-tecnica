import React from 'react'
import { Carrito } from './Carrito'
import { useState } from 'react';

export const Navigator = ({carritoItems}) => {

    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const cambiarCarrito = () => {
      setMostrarCarrito(!mostrarCarrito);
    };


    return (
        <nav className='appNav'>
            <img className='iconBrand' src="https://simplefact.pe/web/img/logo/logo-white.png" alt="" />
            <img className='iconCompra' src="./src/assets/carro-de-la-compra.png" alt="" onClick={cambiarCarrito}  />
            {mostrarCarrito && <Carrito carritoItems={carritoItems} onClose={cambiarCarrito} />}
        </nav>
    )
}
