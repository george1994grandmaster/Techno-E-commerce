import { FC, useRef } from 'react';
import { SliderProps } from "../../types"
import SelectedProductSlider from './selectedProductSlider';
import ProductListSlider from './productListSlider';


const SliderOptional: FC<SliderProps> = ({ sliderName, sliderParams }) => {
  
  switch (sliderName) {
    case 'selectedProductSlider':
      return (
        <SelectedProductSlider sliderParams={sliderParams}/>
      );
    case 'productListSlider':
      return (
        <ProductListSlider sliderParams={sliderParams}/>
      );
    default:
      return (
        <></>
      );
  }
};

export default SliderOptional;

