import { FC } from "react";
import { Outlet } from 'react-router-dom';
import Header from '../components/navbar';
import Footer from '../components/footer';
import BottomWrapper from '../components/bottomWrapper';
import TopWrapper from '../components/topWrapper';


const Layout: FC = () => {

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="top-wrapper">
          <TopWrapper/>
        </div>
        <div className="py-8" style={{backgroundColor: "rgb(242, 242, 242)"}}>
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