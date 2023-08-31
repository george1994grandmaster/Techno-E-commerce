import { useEffect, useState, FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, selectCartProducts, filterProductsById, addToCart, removeFromCart} from '../store/productsSlice';
import { Product } from '../types';

const SelectProduct: FC = () => {
  const { productId } = useParams<{ productId: string }>(); 
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  useEffect(() => {
    if (productId) {
      dispatch(filterProductsById(parseInt(productId)));
    }
  }, [dispatch, productId]);

  useEffect(() => {
    if (productId) {
      const checkIsInCart = cartItems.some((item: Product) => item.id === parseInt(productId));
      setIsInCart(checkIsInCart); 
    }
  }, [cartItems, productId]);

  const [isInCart, setIsInCart] = useState<boolean>(false);
  
  
  const addProductHandler = (product: Product) => {
    dispatch(addToCart(product));
    navigate('/shopping');
  }

  const removeCartHandler = (productId: number) => {
    dispatch(removeFromCart(productId));
  }

  return (
    <div>
      {products && (
        <div>
          <h3>{products[0].name}</h3>
          <h3>{products[0].price}</h3>
          <br />
          <button onClick={() => addProductHandler(products[0])}>add to bag</button>
          {isInCart ? (
            <button onClick={() => removeCartHandler(products[0].id)} style={{ backgroundColor: 'red' }}>
              Remove from Bag
            </button>
          ) : (
            <button disabled style={{ backgroundColor: 'black' }}>
              Remove from Bag
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectProduct;