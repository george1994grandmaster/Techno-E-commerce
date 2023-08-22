import { FC } from 'react';
import { Container } from '@mui/material';
import { StyledTextField, StyledInputLabel, CustomFormControl, StyledTypography } from '../material_Ui';
import MainBtn from '../mainButton';

const LoginForm: FC = () => {
  return (
    <Container>
      <div className="form-typography-content">
        <StyledTypography variant="h5" fontSize="16px" fontWeight="600">
          Enter your login details
        </StyledTypography>
      </div>
      <form>
        <div className="form-col">
          <StyledInputLabel htmlFor="email-input">Email address</StyledInputLabel>
          <CustomFormControl>
            <StyledTextField fullWidth type="email" placeholder="Email address" variant="outlined" id="email-input" />
          </CustomFormControl>
        </div>
        <div className="form-col" >
          <StyledInputLabel htmlFor="password-input">Password</StyledInputLabel>
          <CustomFormControl>
            <StyledTextField fullWidth type="password" placeholder='Password' variant="outlined" id="password-input" />
          </CustomFormControl>
        </div>
        <div className="form-col">
          <div className="form-btn-content">
            <MainBtn text="LOG IN" bgColor="#00381f" color="#fff" innerSpacing="10px 15px"/>
          </div>
        </div>
      </form>
      <p className="text form-warning-text">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply
      </p>
    </Container>
  );
};

export default LoginForm;