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
  const navigate = useNavigate();
  

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
    <div className="container">
      {products && (
        <div className="d-flex ai-center jc-center">
          <div className="xs-12 md-10">
            <div className="d-flex mb-10">
              <FontAwesomeIcon className="success" size="lg" icon={faArrowRotateLeft} style={{ color: "#00381f", marginRight: "10px" }}/>
              <Link to={"/"}>
                <StyledTypography color="#00381f" variant="body1" fontSize="16px" fontWeight="600">
                  Back to home
                </StyledTypography>
              </Link>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectProduct;