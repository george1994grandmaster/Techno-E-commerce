import { FC } from 'react';
import LoginForm from "./loginForm";
import RegisterForm from "./signupForm";
import ContactForm from "./contactForm";
import { Form } from "../../types";


const FormOptional: FC<Form> = ({ formType }) => {
  
  switch ( formType ) {
    
    case 'log in':
      return (
        <LoginForm />
      );
    case "contactForm":
      return (
        <ContactForm/>
      );
    case 'register':
      return (
        <RegisterForm />
      );
      
   
    default:
      return (
        <></>
      );
  }
};

export default FormOptional;
