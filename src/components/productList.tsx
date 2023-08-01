import React, { useEffect } from 'react';
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
      <h1>Products</h1>
      {products.length > 0 ? (
        products.map((product:Product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductList;