import { FC, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSlideIndex, selectSlideIndex } from '../../store/sliderSlice';
import { SliderProps } from "../../types";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import  { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


SwiperCore.use([Navigation]);

const VerticalSlider: FC<SliderProps> = ({sliderParams}) => {
  const slideIndex = useSelector(selectSlideIndex) as number ;
  const dispatch = useDispatch();
  const swiperRef = useRef<SwiperCore | null>(null);

  /*useEffect(() => {
    dispatch(setSlideIndex(0))
  },[dispatch]);*/

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(slideIndex);
    }
  }, [slideIndex]);

  
  const handleSlideClick = (index: number) => {
    if(swiperRef.current) {
      const slideIndex = index; 
      dispatch(setSlideIndex(slideIndex));
    }
  };

  return (
    <div className="vertical-swiper-container">
        <Swiper 
        className="swiper vertical-swiper"
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        slidesPerView={3}
        direction={'vertical'}
        spaceBetween={20}
        //centeredSlides={true} // Center the active slide
        
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Store the Swiper instance in the ref
        }}
      >
        {sliderParams.map((item, index) => (
          <SwiperSlide onClick={() => handleSlideClick(index)} key={index}>
            <img src={item.src} alt={`Slide ${index}`}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <svg xmlns="http://www.w3.org/2000/svg" className="swiper-button-prev" width="20.668" height="11.064" viewBox="0 0 20.668 11.064"><g id="Arrow_Down" data-name="Arrow Down" transform="translate(20.307 10.704) rotate(180)"><path id="Icon_Arrow_Down" data-name="Icon / Arrow Down" d="M10,0,.3,9.279,0,9.564l10,10.4" transform="translate(0 9.996) rotate(-90)" fill="none" stroke="#000" stroke-width="1"></path></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="swiper-button-next" width="20.668" height="11.064" viewBox="0 0 20.668 11.064"><g id="Arrow_Down" data-name="Arrow Down" transform="translate(0.361 0.36)"><path id="Icon_Arrow_Down" data-name="Icon / Arrow Down" d="M10,0,.3,9.279,0,9.564l10,10.4" transform="translate(0 9.996) rotate(-90)" fill="none" stroke="#000" stroke-width="1"></path></g></svg>
    </div>
  )
}

export default  VerticalSlider;

