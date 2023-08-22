import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledTypography } from './material_Ui';
import MainBtn from './mainButton';
import { selectForm } from "../store/formSlice"; 
import { MainLogo, SecondLogo, LargeLogo, VeryLargeLogo } from "./svgFormat"; 

const BottomWrapper: FC = () => {

  const dispatch = useDispatch();

  const selectFormHandle = (formTypeValue: string) => {
    dispatch(selectForm(formTypeValue));
  };

  return (
    <div className="container">
      <StyledTypography variant="h4" fontSize="30px" fontWeight="600" className="mb-5">
        Subscribe to the Newsletter
      </StyledTypography>
      <StyledTypography variant="body1" fontSize="14px" fontWeight="500" className="mb-5">
        Sign up & and receive news about all new Luxury items that has just dropped.
      </StyledTypography>
      <div className="form-btn-content">
        <Link to="/auth/signup">
          <MainBtn text="Sign Up" border="1px solid #d9d9d9" bgColor="transparent" color="rgba(0, 0, 0, 0.88);" innerSpacing="10px 15px" onClick={() => selectFormHandle('register')}/> 
        </Link>
      </div>
      <div style={{padding: "50px 0"}}>
        <div style={{padding: "50px 0"}}>
          <MainLogo/>
        </div>
        <div style={{padding: "50px 0"}}>
          <SecondLogo/>
        </div>
        <div style={{padding: "50px 0"}}>
          <LargeLogo/>
        </div>
        <div style={{padding: "50px 0"}}>
          <VeryLargeLogo/>
        </div>
      </div>
    </div> 
  )
}


export default BottomWrapper;