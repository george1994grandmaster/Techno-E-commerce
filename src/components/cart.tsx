import { useSelector } from 'react-redux';
import { FC } from 'react';
import { selectCartProducts } from '../store/productsSlice';

const Cart: FC = () => {
  const cartItems = useSelector(selectCartProducts);
  

  return (
    <>
      count: {cartItems.length}
    </>
  )
}

export default Cart; 