import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StyledTypography } from '../../components/material_Ui';
import { SliderProps } from "../../types";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import  { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const NavigatedSlider: FC<SliderProps> = ({sliderParams}) => {
 const swiperRef = useRef<SwiperCore | null>(null);

 const handleSlideClick = (index: number) => {
  if(swiperRef.current) {
    const slideIndex = index; 
   
  }
};


  return (
    <div className="products-swiper-container">
      <Swiper 
        className="swiper productList-swiper"
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        //slidesPerView={4}
        //spaceBetween={50}
        //grabCursor={true}
        //centeredSlides
        //loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
        720: {
            slidesPerView: 2,
          },
        992: {
            slidesPerView: 3,
          },
        1200: {
          slidesPerView: 4,
        },
        }}
      >
        {sliderParams && sliderParams.slice(10, 20).map((sliderParam, index) => (
          <SwiperSlide key={index}>
            <div className="card" key={sliderParam.id}>
              <Link to={`/products/detail/${sliderParam.id}`} key={sliderParam.id}>
                <div style={{ width: '100%'}}>
                  <img src={sliderParam.src} alt="product" style={{ display: 'block' }} />
                </div>
                <div className="card-body">
                  <StyledTypography  variant="body1" color="#000" fontSize="16px"  fontWeight="600" className="mb-2">
                    {sliderParam.name}
                  </StyledTypography>
                  <StyledTypography variant="body1" color="rgba(0, 0, 0, 0.88)" fontSize="16px" fontWeight="600">
                    <span className="mr-2">PRICE:</span>
                    <span style={{marginRight: "2px"}}>$</span>
                    {sliderParam.price}
                  </StyledTypography>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev">
        <svg fill="#00381f" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.004 400.004"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"></path> </g> </g></svg>
      </div>
      <div className="swiper-button-next">
        <svg fill="#00381f" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.004 400.004"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"></path> </g> </g></svg>
      </div>
    </div>
  )
}

export default  NavigatedSlider;