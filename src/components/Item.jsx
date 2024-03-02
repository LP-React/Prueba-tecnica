import React from 'react'

export const Item = ({img, title, precio, onAddCart}) => {
  return (
    <div className='item'>
        <img src={img} alt="" />
        <div className='itemInfo'>
            <h3>{title}</h3>
            <p>S/. {precio}</p>
            <button className='itemBtn' onClick={() => onAddCart({img,title,precio})}>Agregar al carrito</button>
        </div>
    </div>
  )
}
