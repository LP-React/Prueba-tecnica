import React from 'react'
import { Item } from './Item'

export const DivItem = ({onAddCart}) => {

    const items = [
        {
            img: 'https://www.impacto.com.pe/storage/products/sm/170121058088368.jpg',
            title: 'TARJETA DE VIDEO ASUS ROG STRIX RTX4090 OC 24GB WHITE',
            precio: 8412.29
        },
        {
            img: 'https://www.impacto.com.pe/storage/products/sm/170542828152829.jpg',
            title: 'TARJETA DE VIDEO ASUS ROG STRIX RTX4090 OC 24GB GDDR6X',
            precio: 9400.29
        },
        {
            img: 'https://www.impacto.com.pe/storage/products/sm/166742919768503.jpg',
            title: 'TARJETA DE VIDEO GIGABYTE RTX 4090 24GB GAMING',
            precio: 9002.29
        }
    ]

    return (
        <div className='divItem'>
            {items.map((item, index) => (
                <Item key={index} img={item.img} title={item.title} precio={item.precio} onAddCart={onAddCart}/>)
            )}
        </div>
    )
}
