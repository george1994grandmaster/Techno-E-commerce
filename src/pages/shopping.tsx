import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseProduct, selectCartProducts, removeFromCart, selectProductQuantities } from '../store/productsSlice'; // Make sure to import the selector

import { Product } from '../types';

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartProducts);
  const productQuantities = useSelector(selectProductQuantities);
  
  // Use the selector to get the product quantities

  const removeCartHandler = (product: Product) => {
    dispatch(removeFromCart(product.id));
  }

  const addProductHandler = (product: Product) => {
    dispatch(addToCart(product));
  }

  const decreaseProductHandler = (productId: number) => {
    dispatch(decreaseProduct(productId));
  }

  const uniqueCartItems: Product[] = [];
  cartItems.forEach((item) => {
    if (!uniqueCartItems.some((i) => i.id === item.id)) {
      uniqueCartItems.push(item);
    }
  });

  console.log(uniqueCartItems)

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {uniqueCartItems.map((item: Product) => {
          const itemCount = cartItems.filter(cartItem => cartItem.id === item.id);
          const cartItemContent = (
            
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>Price: {item.price * productQuantities[item.id]}</p> {/* Display the product quantity */}
              <button onClick={() => removeCartHandler(item)} style={{ backgroundColor: 'red' }}>
                Remove from Bag
              </button>
              <button onClick={() => addProductHandler(item)}>+</button>
              <button onClick={() => decreaseProductHandler(item.id)}>-</button>
              <span>{itemCount.length}</span> {/* Display the count for each product */}
            </li>
          );
          return cartItemContent;
        })}
      </ul>
    </div>
  );
};

export default ShoppingCart;