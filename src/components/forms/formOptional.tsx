import { FC, useRef } from 'react';
import LoginForm from "./loginForm";
import RegisterForm from "./signupForm";
import { useSelector, useDispatch } from 'react-redux';
import { selectForm } from "../../store/formSlice"; 
import { selectFormType } from '../../store/formSlice';
import { Form } from "../../types";


const FormOptional: FC<Form> = ({ formType }) => {
  
  switch ( formType ) {
    case 'log in':
      return (
        <LoginForm />
      );
    case 'register':
      return (
        < RegisterForm />
      );
   
    default:
      return (
        <></>
      );
  }
};

export default FormOptional;
