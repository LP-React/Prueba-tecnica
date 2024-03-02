import React from 'react'
import { Navigator } from './components/Navigator'
import { DivItem } from './components/DivItem'
import { useState } from 'react'

export const Tienda = () => {

  const [carritoItems, setCarritoItems] = useState([]);

  const addToCart = (item) => {
    setCarritoItems([...carritoItems, item]);
  };

  return (
    <>
        <Navigator carritoItems={carritoItems}/>
        <DivItem onAddCart={addToCart}/>
    </>
  )
}
