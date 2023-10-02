import { FC, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSlideIndex, setSlideIndex } from '../../store/sliderSlice';
import { SliderProps } from "../../types";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import  { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


SwiperCore.use([Navigation]);

const NavigatedSlider: FC<SliderProps> = ({sliderParams}) => {
  const dispatch = useDispatch();
  const slideIndex = useSelector(selectSlideIndex) as number ;
  const swiperRef = useRef<SwiperCore | null>(null);

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

  const handleSlideChange = (index: number) => {
    if(swiperRef.current) {
      const slideIndex = index; 
      dispatch(setSlideIndex(slideIndex))
    }
  };

  return (
    <>
      <Swiper 
        className="swiper navigation-swiper"
        slidesPerView={1}
        spaceBetween={40}
        grabCursor={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const activeIndex = swiper.activeIndex;
          handleSlideChange(activeIndex);
        }}
      >
        {sliderParams.map((item, index) => (
          <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
            <img src={item.src} alt={`Slide ${index}`}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default  NavigatedSlider;

