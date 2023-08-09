import { useEffect, useState, FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts,  selectCartProducts} from '../store/productsSlice';
import { filterProductsById, addToCart, removeFromCart } from "../store/productsSlice";
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';


const SelectProduct: FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>(); 
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartProducts);
  const dispatch = useDispatch<any>();
 
  useEffect(() => {
    dispatch(filterProductsById(productId) as any);
  }, [dispatch, productId]);

  useEffect(() => {
    if (productId) {
      const checkIsInCart = cartItems.some((item) => item.id === parseInt(productId));
      setIsInCart(checkIsInCart); 
    }
  }, [cartItems, productId]);

  const [isInCart, setIsInCart] = useState(false);

  const addToCartHandler = (product: any) => {
    dispatch(addToCart(product));
    navigate(`/shopping`);
  };

  const removeCartHandler = (product: any) => {
    dispatch(removeFromCart(product.id));
    navigate(`/shopping`);
  }

  return (
    <div>
      {products && (
        <div>
          <h3>{products[0].name}</h3>
          <h3>{products[0].price}</h3>
          <br />
          <button onClick={() => addToCartHandler(products[0])}>add to bag</button>

          {isInCart ? (
            <button onClick={() => removeCartHandler(products[0])} style={{ backgroundColor: 'red' }}>
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