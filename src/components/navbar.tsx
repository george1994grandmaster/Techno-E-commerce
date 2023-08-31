import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectForm } from "../store/formSlice"; 
import { NavbarLogo } from "./svgFormat"; 
import SearchBar from "./searchBar";
import Cart from "./cart";
import Button from "./button";
import { Instagram } from "./svgFormat";

const Header: FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate("/auth");
    dispatch(selectForm("log in"));
  }
  
  return (
    <div className="navbar-wrapper">
      <div className="d-flex ai-center">
        <div className="col-1">
          <Button text={"Shop"} color="rgba(0, 0, 0, 0.88)" innerSpacing="5px 15px" onClick={() => handleNavigate()}/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-1">
          <Button text={"Discover"} color="rgba(0, 0, 0, 0.88)" innerSpacing="5px 15px" onClick={() => handleNavigate()}/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-1">
          <Button svg={<NavbarLogo/>} innerSpacing="5px 15px" onClick={() => handleNavigate()}/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-full-auto">
          <SearchBar/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-1">
          <Button svg={<Instagram/>} height="100%" innerSpacing="5px 15px" onClick={() => handleNavigate()}/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-1">
          <Cart />
        </div>
        
      </div>
    </div>
  )
};

export default Header;