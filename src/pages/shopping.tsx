import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseProduct, selectCartProducts, removeFromCart } from '../store/productsSlice';
import { Product } from '../types';

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartProducts);

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