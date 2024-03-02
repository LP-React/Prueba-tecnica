import React from 'react'

export const Carrito = ({ carritoItems }) => {

    const totalPrice = carritoItems.reduce((total, item) => total + item.precio, 0);

    return (
        <div className='carritoContainer'>
            <ul className='cartList'>
                {carritoItems && carritoItems.map((item, index) => (
                    <li key={index}>{item.title} - {item.precio}</li>
                ))}
            </ul>
            <ul> TOTAL S/. {totalPrice.toFixed(2)}</ul>
        </div>
    )
}
