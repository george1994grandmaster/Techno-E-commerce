import { FC, useState } from 'react';
import { Container } from '@mui/material';
import { StyledTextField, StyledInputLabel, CustomFormControl, StyledTypography } from '../material_Ui';
import Checkbox from '@mui/material/Checkbox';
import MainBtn from '../mainButton';

const RegisterForm: FC = () => {

  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <div className="form-typography-content">
        <StyledTypography variant="h5" fontSize="16px" fontWeight="600">
          Enter your registration details
        </StyledTypography>
      </div>
      <form>
        <div style={{marginBottom: "24px"}}>
          <StyledInputLabel htmlFor="email-input">Full name</StyledInputLabel>
          <CustomFormControl>
            <StyledTextField fullWidth variant="outlined" placeholder="full name" id="full-name-input" />
          </CustomFormControl>
        </div>
        <div style={{marginBottom: "24px"}}>
          <StyledInputLabel htmlFor="password-input">Email address</StyledInputLabel>
          <CustomFormControl>
            <StyledTextField fullWidth type="email" variant="outlined" placeholder="Email address" id="email-input" />
          </CustomFormControl>
        </div>
        <div style={{marginBottom: "24px"}}>
          <StyledInputLabel htmlFor="password-input">Password</StyledInputLabel>
          <CustomFormControl>
            <StyledTextField fullWidth type="password" variant="outlined" placeholder="Password-id" />
          </CustomFormControl>
        </div>
        <div style={{marginBottom: "24px"}}>
          <StyledInputLabel htmlFor="confirm-password-input">Confirm Password</StyledInputLabel>
          <CustomFormControl>
            <StyledTextField fullWidth type="password" variant="outlined" placeholder="Password Confirm" id="confirm-password-input" />
          </CustomFormControl>
        </div>
        <div className="form-col">
          <p className="text form-info-text">
            We would like to send you marketing information about our products and services
            using email, text, telephone or post. We may also use your information to deliver personalised
            messages or advertising on social media or other digital platforms. You can ask us to stop marketing at any time. For further information about how we use your personal information, please see our Privacy Policy. If you wish to opt-out of receiving marketing information, please click here.
          </p>
          <StyledInputLabel className="checkbox-content">
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              disableRipple
            />
            <span className="text checkbox-text dark">I do not wish to receive marketing information about your products and services.</span>
          </StyledInputLabel>
          <div className='form-btn-content'>
            <MainBtn text="CREATE ACCOUNT" bgColor="#00381f" color="#fff" innerSpacing="10px 15px"/>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default RegisterForm;