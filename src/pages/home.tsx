import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts } from '../store/productsSlice';
import { fetchPresentContent, selectPresentationContent } from '../store/presentSlice';
import { StyledTypography } from '../components/material_Ui';
import { Product, PresentContent, HomePageContent} from '../types';
import { MainBannerLogo } from '../components/svgFormat';
import  SliderOptional  from '../components/sliders/sliderOptional';

const Home: FC = () => {
  const allProducts = useSelector(selectAllProducts);
  const presentationContent = useSelector(selectPresentationContent);
  const dispatch = useDispatch();
  const fromItem = 0;
  const limitItem = 8;

  useEffect(() => {
    dispatch(fetchPresentContent() as any);
  }, [dispatch]);

  return (
    <>
      <div className="banner-wrapper">
        <div className="banner">
          <div className="banner-logo">
            <MainBannerLogo/>
          </div>
        </div>
      </div>
      <div className="py-10" style={{backgroundColor: "rgb(242, 242, 242)"}}>
        <div className="container">
          <StyledTypography variant="body1" color="rgba(0, 0, 0, 0.88)" fontSize="22px" fontWeight="600" className="my-10">
            Shop new Arrivals
          </StyledTypography>
          <div className="productList-container">
            {allProducts &&
            allProducts.slice(fromItem, limitItem).map((product: Product) => (
              <div className="card" key={product.id}>
                <Link to={`/products/detail/${product.id}`} key={product.id}>
                  <div style={{ width: '100%'}}>
                    <img src={product.src} alt="product" style={{ display: 'block' }} />
                  </div>
                  <div className="card-body">
                    <StyledTypography  variant="body1" color="#000" fontSize="16px"  fontWeight="600" className="mb-2">
                      {product.name}
                    </StyledTypography>
                    <StyledTypography variant="body1" color="rgba(0, 0, 0, 0.88)" fontSize="16px" fontWeight="600">
                      <span className="mr-2">PRICE:</span>
                      <span style={{marginRight: "2px"}}>$</span>
                      {product.price}
                    </StyledTypography>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {presentationContent &&
        <div className="container">
          <div className="py-10">
            <div className="d-flex f-wrap">
              <div className="xs-12 sm-12 md-6 presentation-img-content">
                <img src={presentationContent.src} alt="presentation-img"/>
              </div>  
              <div className="xs-12 sm-12 md-6">
                <div className="d-flex ai-center jc-center" style={{height: "100%"}}>
                  <div className="text-layout">
                    <StyledTypography  variant="h5" color="rgba(0, 0, 0, 0.88)" fontSize="18px"  fontWeight="600" className="mb-5">
                      {presentationContent.title}
                    </StyledTypography>
                    <StyledTypography  variant="body1" color="rgba(0, 0, 0, 0.88)" fontSize="16px"  fontWeight="500">
                      {presentationContent.text}
                    </StyledTypography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {allProducts && 
        <div className="py-10" style={{backgroundColor: "rgb(242, 242, 242)"}}>
          <div className="container">
            <StyledTypography  variant="h4" color="rgba(0, 0, 0, 0.88)" fontSize="23px" fontWeight="600" className="mb-6 px-4">
              Trending Arrivals
            </StyledTypography>
            <SliderOptional sliderName="productListSlider" sliderParams={allProducts}/>
          </div>
        </div>
      }
    </>
  )
}

export default Home;