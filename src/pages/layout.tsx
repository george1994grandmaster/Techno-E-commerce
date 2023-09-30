import { FC, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSidebarPosition } from '../store/sidebarSlice';
import Header from '../components/navbar';
import Footer from '../components/footer';
import BottomWrapper from '../components/bottomWrapper';
import TopWrapper from '../components/topWrapper';


const Layout: FC = () => {

  
  return (
    <>
      <Header />
      <div className="container-fluid">
        <TopWrapper/>
       <div>
          <Outlet />
        </div>
        <div className="bottom-wrapper">
          <BottomWrapper />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;