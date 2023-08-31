import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartProducts } from '../store/productsSlice'; // Replace with your actual import

const Cart: FC = () => {
  const cartItems = useSelector(selectCartProducts);
  const [totalProductCount, setTotalProductCount] = useState<number>(0);
  
  
  useEffect(() => {
    const productQuantity = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity;
    }, 0);
    setTotalProductCount(productQuantity);
  }, [cartItems]); 

  return (
    <>
      <p>{totalProductCount}</p>
    </>
  )
}

export default Cart;