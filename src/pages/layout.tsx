import { FC } from "react";
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import BottomWrapper from '../components/bottomWrapper';

const Layout: FC = () => {
  
  return (
    <>
      <Header />
      <div className="center-wrapper">
        <Outlet />
      </div>
      <div className="bottom-wrapper">
        <BottomWrapper />
      </div>
      <Footer />
    </>
  );
};

export default Layout;