import { FC, useState } from 'react';
import { Container } from '@mui/material';
import { StyledTextField, StyledInputLabel, CustomFormControl, StyledTypography } from '../material_Ui';
import Checkbox from '@mui/material/Checkbox';
import Button from '../button';

const RegisterForm: FC = () => {

  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <div className="d-flex jc-center">
        <div className="xs-12 sm-9 lg-7">
          <div className="form-typography-content">
            <StyledTypography className="mb-4" variant="body1" fontSize="14px" fontWeight="500">
              Customer Service
            </StyledTypography>
            <StyledTypography className="mb-6" variant="h1" fontSize="30px" fontWeight="600">
              Contact Us
            </StyledTypography>
            <StyledTypography className="mb-10" variant="body1" fontSize="14px" fontWeight="500">
              If you have any questions, send an email by filling out the contact form below, or call
            </StyledTypography>
            <div className="d-flex ai-center jc-between mb-8"> 
              <StyledTypography variant="h3" fontSize="20px" fontWeight="600">
                CONTACT DETAILS
              </StyledTypography>
              <StyledTypography className="required-col" variant="body1" fontSize="14px" fontWeight="500">
                Required fields
              </StyledTypography>
            </div>
          </div>
          <form>
            <div style={{marginBottom: "24px"}}>
              <StyledInputLabel className="required-col" htmlFor="name-input">Name</StyledInputLabel>
              <CustomFormControl>
                <StyledTextField fullWidth variant="outlined" placeholder="Name" id="name-input" />
              </CustomFormControl>
            </div>
            <div style={{marginBottom: "24px"}}>
              <StyledInputLabel className="required-col" htmlFor="surname-input">Surname</StyledInputLabel>
              <CustomFormControl>
                <StyledTextField fullWidth type="text" variant="outlined" placeholder="Surname" id="surname-input" />
              </CustomFormControl>
            </div>
            <div style={{marginBottom: "24px"}}>
              <StyledInputLabel className="required-col" htmlFor="email-input">Email address</StyledInputLabel>
              <CustomFormControl>
                <StyledTextField fullWidth type="email" variant="outlined" placeholder="Email" id="email-input"/>
              </CustomFormControl>
            </div>
            <div style={{marginBottom: "24px"}}>
              <StyledInputLabel className="required-col" htmlFor="suphone-input">Phone</StyledInputLabel>
              <CustomFormControl>
                <StyledTextField fullWidth type="tel" variant="outlined" placeholder="+(888) 675-6983" id="suphone-input"/>
              </CustomFormControl>
            </div>
            <div className="form-col">
              <StyledTypography variant="body1" fontSize="15px" fontWeight="500" color= "rgba(0, 0, 0, 0.88)" className="mb-5">
                We would like to send you marketing information about our products and services
                using email, text, telephone or post. We may also use your information to deliver personalised
                messages or advertising on social media or other digital platforms. You can ask us to stop marketing at any time. For further information about how we use your personal information, please see our Privacy Policy. If you wish to opt-out of receiving marketing information, please click here.
              </StyledTypography>
              <StyledInputLabel  className="checkbox-content">
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  disableRipple
                />
                <StyledTypography className="checkbox-text" variant="body1" fontSize="15px" fontWeight="500" color= "rgba(0, 0, 0, 0.88)">
                  I do not wish to receive marketing information about your products and services.
                </StyledTypography>
              </StyledInputLabel>
              <div className="btn-content">
                <Button text="CREATE ACCOUNT" bgColor="#00381f" color="#fff" innerSpacing="10px 15px"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterForm;