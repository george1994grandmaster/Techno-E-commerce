import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseFromCart, selectCartProducts, removeFromCart, selectProductQuantities } from '../store/productsSlice'; // Make sure to import the selector
import { Product } from '../types';

const ShoppingCart: FC = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartProducts);
  const [totalProductPrice, setTotalProductPrice] = useState<number>(0); 

  useEffect(() => {
    const totalProductPrice = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.totalPrice;
    }, 0);
    setTotalProductPrice(totalProductPrice);
  }, [cartItems]); 
  
  const removeCartHandler = (productId: number) => {
    dispatch(removeFromCart(productId));
  }

  const addProductHandler = (product: Product) => {
    dispatch(addToCart(product));
  }

  const decreaseProductHandler = (productId: number) => {
    dispatch(decreaseFromCart(productId));
  }

  return (
    <div>
      <h2>Cart Items</h2>
      <div>
      {cartItems.map((item: Product) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.totalPrice}</p>
          <button onClick={() => removeCartHandler(item.id)} style={{ backgroundColor: 'red' }}>
            Remove from Bag
          </button>
          <button onClick={() => addProductHandler(item)}>+</button>
          <button onClick={() => decreaseProductHandler(item.id)}>-</button>
          <span>{item.quantity}</span>
        </div>
        ))}
      </div>
      <p>Total Price: {totalProductPrice}</p>
    </div>
  );
};

export default ShoppingCart;