import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../store/productsSlice';
import { filterProductsById, filterProductsByLetter } from "../store/productsSlice";
import { Product } from '../types';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); 
  const { searchQuery } = useParams<{ searchQuery: string }>();
  const products = useSelector(selectProducts);
  const dispatch = useDispatch<any>();
  console.log(searchQuery)

  useEffect(() => {
    dispatch(filterProductsById(productId));
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery) {
      dispatch(filterProductsByLetter(searchQuery));
    }
  }, [dispatch]);

  return (
    <div>
      {products.length > 0 ? (
        products.map((product:Product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <br/>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;