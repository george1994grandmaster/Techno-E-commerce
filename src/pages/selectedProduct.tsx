import { useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../store/productsSlice';
import { filterProductsById, addToCart } from "../store/productsSlice";
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

const SelectProduct: FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>(); 
  const products = useSelector(selectProducts);
  const dispatch = useDispatch<any>();
 
  useEffect(() => {
    dispatch(filterProductsById(productId));
  }, [dispatch, productId]);

  const addToCartHandler = (product: any) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    navigate(`/shopping`);
  };

  return (
    <div>
      {products && products.length > 0 && (
        <div key={products[0].id}>
          <h3>{products[0].name}</h3>
          <h3>{products[0].price}</h3>
          <br/>
        </div>
      )}
      
      <button onClick={() => addToCartHandler(products[0])}>add to bag</button>
    </div>
  );
};

export default SelectProduct;