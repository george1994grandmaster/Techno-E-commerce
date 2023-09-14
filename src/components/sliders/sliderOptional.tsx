import { FC, useRef } from 'react';
import SwiperCore from 'swiper';
import { SliderProps } from "../../types"
import SelectedProductSlider from './selectedProductSlider';


const SliderOptional: FC<SliderProps> = ({ sliderName, sliderParams }) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  switch (sliderName) {
    case 'selectedProductSlider':
      return (
       
          <SelectedProductSlider sliderParams={sliderParams}/>
        
      );
    case 'blogSlider':
      return (
        <></>
      );
    case 'StorySlider':
      return (
        <></>
      );
    case 'coursesSlider':
      return (
        <></>
      );
    default:
      return (
        <></>
      );
  }
};

export default SliderOptional;

