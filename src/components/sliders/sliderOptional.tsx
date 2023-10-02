import { FC } from 'react';
import { SliderProps } from "../../types"
import SelectedProductSlider from './selectedProductSlider';
import ProductListSlider from './productListSlider';
import ModalSlider from './modalSlider';


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
    case 'modalSlider':
      return (
        <ModalSlider sliderParams={sliderParams}/>
      );
    default:
      return (
        <></>
      );
  }
};

export default SliderOptional;

