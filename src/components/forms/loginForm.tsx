import { FC } from 'react';
import { Container } from '@mui/material';
import { StyledTextField, StyledInputLabel, CustomFormControl, StyledTypography } from '../material_Ui';
import Button from '../button';

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
            <StyledTextField  fullWidth type="email" placeholder="Email address" variant="outlined" id="email-input" />
          </CustomFormControl>
        </div>
        <div className="form-col" >
          <StyledInputLabel htmlFor="password-input">Password</StyledInputLabel>
          <CustomFormControl>
            <StyledTextField  fullWidth type="password" placeholder='Password' variant="outlined" id="password-input" />
          </CustomFormControl>
        </div>
        <div className="form-col">
          <div className="btn-content">
            <Button text="LOG IN" bgColor="#00381f" color="#fff" innerSpacing="10px 15px"/>
          </div>
        </div>
      </form>
      <StyledTypography variant="body1" fontSize="15px" fontWeight="500" color= "rgba(0, 0, 0, 0.88)">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply
      </StyledTypography>
    </Container>
  );
};

export default LoginForm;