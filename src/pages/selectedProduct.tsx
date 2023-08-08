import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../store/productsSlice';
import { filterProductsById } from "../store/productsSlice";
import { Product } from '../types';

const SelectProduct: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); 
  const products = useSelector(selectProducts);
  const dispatch = useDispatch<any>();
 
  useEffect(() => {
    dispatch(filterProductsById(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {products.length > 0 && 
        products.map((product:Product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <br/>
          </div>
        ))
      }
    </div>
  );
};

export default SelectProduct;