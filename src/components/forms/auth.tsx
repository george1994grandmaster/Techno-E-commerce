import  { FC, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Login from "./loginForm";
import RegisterForm from "./signupForm";
import MainBtn from "../button";
import { selectForm } from "../../store/formSlice"; 
import { selectFormType } from '../../store/formSlice';

const Form: FC = () => {
  const formType = useSelector(selectFormType);
  const dispatch = useDispatch();
    
  //useEffect(() => {
    //dispatch(selectForm("log in"));
  //}, []);

  const selectFormHandle = (formTypeValue: string) => {
    dispatch(selectForm(formTypeValue));
  };

  return (
    
    <div>
      <div className="container">
        <div className="d-flex jc-center">
          <div className="xs-12 sm-9 lg-6">
            <div className={`option-btn-layout ${formType === 'log in' ? 'left' : 'right'}`}>
              <div className="option-btn-content">
                <MainBtn text="Log In" bgColor="transparent" color="#00381f" innerSpacing="10px 15px" onClick={() => selectFormHandle("log in")}/>
              </div>
              <div className="option-btn-content">
                <MainBtn text="Create Account" bgColor="transparent" color="#00381f" innerSpacing="10px 15px" onClick={() => selectFormHandle("register")}/> 
              </div>
            </div>
            {formType === 'log in' ? <Login /> : <RegisterForm />}
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Form;