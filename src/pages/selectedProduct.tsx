import { useEffect, useState, FC } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import Slider from '../components/sliders/slider';
import { selectProducts, selectCartProducts, filterProductsById, addToCart, removeFromCart} from '../store/productsSlice';
import { StyledTypography } from '../components/material_Ui';
import Button  from '../components/button';
import { Product, Variation } from '../types';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

const SelectProduct: FC = () => {
  const { productId } = useParams<{ productId: string }>(); 
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartProducts);
  const dispatch = useDispatch();

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
  }

  const removeCartHandler = (productId: number) => {
    dispatch(removeFromCart(productId));
  }

  return (
    <div className="container">
      {products  && (
        <>
        <div className="d-flex ai-center mb-10">
          <FontAwesomeIcon className="success" size="lg" icon={faArrowRotateLeft} style={{ color: "#00381f", marginRight: "10px" }}/>
          <Link to={"/"}>
            <StyledTypography color="#00381f" variant="body1" fontSize="16px" fontWeight="600">
              Back to home
            </StyledTypography>
          </Link>
        </div>
        <div className="d-flex ai-center jc-between">
          <div className="xs-12 sm-12 md-6">
            <img className="d-block" src={products[0].src} alt="selected-product-img" style={{height:"300px", objectFit: "scale-down"}}/>
          </div>
          <div className="xs-12 sm-12 md-3">
            <div className="d-flex fd-column" style={{gap: "20px"}}>
              <StyledTypography color="rgba(0, 0, 0, 0.88)" variant="h3" fontSize="24px" fontWeight="600">
                {products[0].name}
              </StyledTypography>
              <StyledTypography color="rgba(0, 0, 0, 0.88)" variant="h3" fontSize="24px" fontWeight="600">
                Price:&nbsp;&nbsp;${products[0].price}
              </StyledTypography>
              <div className="btn-content">
                <Button onClick={() => addProductHandler(products[0])} text="Add to bag" bgColor="#00381f" color="#fff"/>
              </div>
                {isInCart ? (
                  <div className="btn-content">
                    <Button onClick={() => removeCartHandler(products[0].id)} text="Remove from Bag" bgColor="#484848" color="#fff"/>
                  </div>
                ) : (
                <div className="btn-content">
                  <Button onClick={() => removeCartHandler(products[0].id)} text="Remove from Bag" bgColor="#484848" color="#fff" opacity={0.4}/>
                </div>
              )}
            </div>
          </div>
        </div>
        {/*<Slider sliderName="selectedProductSlider" sliderParams={products[0].variations}/>*/}
        
      </>
      )}
    </div>
  );
};

export default SelectProduct;