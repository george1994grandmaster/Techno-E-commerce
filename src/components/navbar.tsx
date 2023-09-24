import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarPosition } from '../store/sidebarSlice';
import { NavbarLogo } from "./svgFormat"; 
import SearchBar from "./searchBar";
import Cart from "./cart";
import Button from "./button";
import { UserIcon, CartIcon } from "./svgFormat";
import Sidebar from "./sidebar";

const Header: FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarClosed, setIsSidebarClosed] = useState<boolean>(false);

  const handleNavigate = (path: string) => {
    navigate(path);
  }

  const openSidebar = () => {
    //setIsSidebarClosed(true);
    dispatch(setSidebarPosition(true));
  };
  
  
  /*const closeSidebar = () => {
    setIsSidebarClosed(false);
  };*/


  
  return (
    <div className="navbar-wrapper">
      <Sidebar /*sidebarCondition={isSidebarClosed}*//>
      <div className="d-flex">
        <div className="col-1">
          <Button text={"Shop"} color="rgba(0, 0, 0, 0.88)" innerSpacing="10px 15px" onClick={openSidebar}/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-1">
          <Button text={"Discover"} color="rgba(0, 0, 0, 0.88)" innerSpacing="10px 15px" onClick={() => handleNavigate("products")}/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-1">
          <Button svg={<NavbarLogo/>} innerSpacing="10px 15px" onClick={() => handleNavigate("")}/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-full-auto">
          <SearchBar/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-05">
          <Button svg={<UserIcon/>} height="100%" innerSpacing="10px 15px" onClick={() => handleNavigate("auth")}/>
        </div>
        <div style={{width: "1px", height: "50px", backgroundColor: "rgb(0, 56, 31)"}}></div>
        <div className="col-05">
          <div className="d-flex  p-relative ai-center" style={{height: "100%", maxWidth: "63px"}}>
            <Button svg={<CartIcon/>} height="100%" innerSpacing="10px 5px" onClick={() => handleNavigate("shopping-cart")}/>
            <Cart/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;