import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../store/productsSlice';
import { Product } from '../types';


const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  
  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  return (
    <div className="container">
      <div className="d-flex ai-center">
        {allProducts &&
          allProducts.map((product: Product) => (
            <div className="card xs-12 sm-4 md-4 lg-3" key={product.id}>
              <Link to={`/products/detail/${product.id}`} key={product.id} style={{ display: 'block' }}>
                <div className="d-flex fd-column jc-center ai-center">
                  <div style={{ width: '100%' }}>
                    <img src={product.src} alt="product" style={{ display: 'block' }} />
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: '16px' }}>{product.name}</h3>
                    <h3 style={{ fontSize: '16px' }}>{product.price}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;