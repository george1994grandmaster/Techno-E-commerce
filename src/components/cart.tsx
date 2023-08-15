import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartProducts } from '../store/productsSlice'; // Replace with your actual import

const Cart: FC = () => {
  const cartItems = useSelector(selectCartProducts);
  const [totalProductCount, setTotalProductCount] = useState<number>(0);
  const [totalProductPrice, setTotalProductPrice] = useState<number>(0); // Initialize with 0
  
  useEffect(() => {
    const productQuantity = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity;
    }, 0);
    setTotalProductCount(productQuantity);

    const totalProductPrice = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.totalPrice;
    }, 0);
    setTotalProductPrice(totalProductPrice);
  }, [cartItems]); 

  return (
    <>
      <p>Total Quantity: {totalProductCount}</p>
      <p>Total Price: {totalProductPrice}</p>
    </>
  )
}

export default Cart;