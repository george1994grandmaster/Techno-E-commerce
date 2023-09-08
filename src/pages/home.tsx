import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../store/productsSlice';
import { Product } from '../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import  { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    dispatch(fetchProducts() as any);
    swiperRef.current = new SwiperCore('.swiper-container', {
      speed: 600,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    });
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

      <div className="swiper-container">
  <div className="swiper-wrapper">
    <div className="swiper-slide">Slide 1</div>
    <div className="swiper-slide">Slide 2</div>
    <div className="swiper-slide">Slide 3</div>
  </div>
  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
          </div>
    </div>
  );
};

export default ProductList;