import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../store/productsSlice';
import { filterProductsByLetter } from "../store/productsSlice";
import { Product } from '../types';

const SearchProduct: React.FC = () => {
  const { productQuery } = useParams<{ productQuery: string }>();
  const products = useSelector(selectProducts);
  const dispatch = useDispatch<any>();
 
  useEffect(() => {
    if (productQuery) {
      dispatch(filterProductsByLetter(productQuery));
    }
  }, [dispatch, productQuery]);

  return (
    <div>
      {products &&
        products.map((product:Product) => (
          <Link to={`/products/detail/${product.id}`} key={product.id}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <br/>
          </Link>
        ))
      }
    </div>
  );
};

export default SearchProduct;