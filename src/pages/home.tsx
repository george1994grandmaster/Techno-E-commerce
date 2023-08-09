import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectProducts } from '../store/productsSlice';
import { Product } from '../types';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<any>();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {products && (
        products.map((product:Product) => (
          <Link to={`/products/detail/${product.id}`} key={product.id}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <br/>
          </Link>
        ))
      )
    }
    </div>
  );
};

export default ProductList;