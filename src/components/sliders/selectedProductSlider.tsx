import { FC, useRef } from 'react';
import { SliderProps } from "../../types";
import VerticalSlider from "./verticalSlider";
import NavigatedSlider from "./navigatedSlider";

const SelectedProductSlider: FC<SliderProps> = ({sliderParams})=> {
  
  return (
    <div className="d-flex jc-between">
      <div className="xs-12 sm-12 md-2">
        <VerticalSlider sliderParams={sliderParams}/>
      </div>
      <div className="xs-12 sm-12 md-8">
        <div className="d-flex ai-center" style={{height: "100%"}}>
          <NavigatedSlider sliderParams={sliderParams}/>
        </div>
      </div>
    </div>
  )
}

export default  SelectedProductSlider;