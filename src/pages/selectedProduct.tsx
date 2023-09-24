import { useEffect, useState, useRef, FC } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSlideIndex } from '../store/sliderSlice';
import SliderOptional from '../components/sliders/sliderOptional';
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
    window.scrollTo(0, 0); 
    if (productId) {
      dispatch(filterProductsById(parseInt(productId)));
      const checkIsInCart = cartItems.some((item: Product) => item.id === parseInt(productId));
      setIsInCart(checkIsInCart); 
    }
  }, [dispatch, productId, cartItems]);

  useEffect(() => {
    dispatch(setSlideIndex(0))
  },[]);

const [isInCart, setIsInCart] = useState<boolean>(false);
  
  
  const addProductHandler = (product: Product) => {
    dispatch(addToCart(product));
    //navigate('/shopping');
  }

  const removeCartHandler = (productId: number) => {
    dispatch(removeFromCart(productId));
  }

  return (
    <>
      {products && products[0] &&(
        <div className="d-flex ai-center jc-center">
          <div className="xs-12 md-10">
            <div className="d-flex mb-10">
              <Link to={"/"} className="d-flex ai-center hovered-underline">
                <FontAwesomeIcon className="success" size="lg" icon={faArrowRotateLeft} style={{ color: "#00381f", marginRight: "10px" }}/>
                <StyledTypography color="#00381f" variant="body1" fontSize="16px" fontWeight="600">
                  Back to home
                </StyledTypography>
              </Link>
            </div>
            <div className="d-flex jc-between">
              <div className="xs-12 sm-12 md-7">
                <SliderOptional sliderName="selectedProductSlider" sliderParams={products[0].variations}/>
              </div>
              <div className="xs-12 sm-12 md-4 px-3">
                <div className="d-flex fd-column" style={{gap: "20px"}}>
                  <StyledTypography style={{lineHeight: "1.3"}} color="rgba(0, 0, 0, 0.88)" variant="h3" fontSize="24px" fontWeight="600">
                    {products[0].name}
                  </StyledTypography>
                  <StyledTypography color="rgba(0, 0, 0, 0.88)" variant="h3" fontSize="24px" fontWeight="600">
                    Price:&nbsp;&nbsp;${products[0].price}
                  </StyledTypography>
                  <div className="btn-content">
                    <Button onClick={() => addProductHandler(products[0])} width="100%" text="Add to bag" innerSpacing="10px 8px" bgColor="#00381f" color="#fff"/>
                  </div>
                    {isInCart ? (
                      <div className="btn-content">
                        <Button onClick={() => removeCartHandler(products[0].id)} width="100%" text="Remove from Bag" innerSpacing="10px 8px" bgColor="#484848" color="#fff"/>
                      </div>
                    ) : (
                    <div className="btn-content">
                      <Button onClick={() => removeCartHandler(products[0].id)} width="100%" text="Remove from Bag" innerSpacing="10px 8px" bgColor="#484848" color="#fff" opacity={0.4}/>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectProduct;