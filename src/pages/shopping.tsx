import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCartProducts } from '../store/productsSlice';
import { Product } from '../types'; // Import the Product type

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartProducts); // Use the selector here

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');

    if (storedCartItems.length > 0) {
      dispatch(addToCart(storedCartItems)); // Dispatch the entire array
    }
  }, [dispatch]);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item: Product, index: number) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;