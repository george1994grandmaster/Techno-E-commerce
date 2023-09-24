import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledTypography } from './material_Ui';
import MainBtn from './button';
import { MainLogo, Visa, MasterCard, Ethereum, Instagram, Facebook, TikTok} from "./svgFormat"; 

const BottomWrapper: FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectFormHandle = (formTypeValue: string) => {
    navigate('/auth');
  };

  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-between">
          <div className="xs-12 sm-12 md-9 px-3">
            <div className="d-flex jc-between fd-column" style={{height: "100%"}}>
              <div>
                <StyledTypography variant="h4" fontSize="30px" fontWeight="600" className="mb-4">
                  Subscribe to the Newsletter
                </StyledTypography>
                <StyledTypography variant="body1" fontSize="14px" fontWeight="500" className="mb-4">
                  Sign in & and receive news about all new Luxury items that has just dropped.
                </StyledTypography>
                <div className="btn-content mb-3">
                  <MainBtn text="Sign in" border="1px solid #d9d9d9" bgColor="transparent" color="rgba(0, 0, 0, 0.88);" innerSpacing="10px 15px" onClick={() => selectFormHandle("log in")}/> 
                </div>
              </div>
              <div style={{paddingBottom: "40px"}}>
                <MainLogo/>
              </div>
            </div>
          </div>
          <div className="xs-12 sm-12 md-2" style={{borderLeft: "1px solid rgb(0, 56, 31)"}}>
            <div className="d-flex fd-column" style={{height: "100%", paddingLeft: "10px", gap: "30px"}}>
              <div className="d-flex fd-column" style={{gap: "8px"}}>
                <StyledTypography variant="h5" fontSize="14px" fontWeight="600" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                  Order Assistance
                </StyledTypography>
                <Link to="#">
                  <StyledTypography variant="body1" fontSize="14px" fontWeight="500" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                    Payment Options
                  </StyledTypography>
                </Link>
                <Link to="#">
                  <StyledTypography variant="body1" fontSize="14px" fontWeight="500" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                    Shipping & Delivery
                  </StyledTypography>
                </Link>
                <Link to="#">
                  <StyledTypography variant="body1" fontSize="14px" fontWeight="500" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                    Returns & Refunds
                  </StyledTypography>
                </Link>
              </div>
              <div className="d-flex fd-column" style={{gap: "8px"}}>
                <StyledTypography variant="h5" fontSize="14px" fontWeight="600" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                  Services
                </StyledTypography>
                <Link to="#">
                  <StyledTypography variant="body1" fontSize="14px" fontWeight="500" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                    Warranty
                  </StyledTypography>
                </Link>
              </div>
              <div className="d-flex fd-column" style={{gap: "8px"}}>
                <StyledTypography variant="h5" fontSize="14px" fontWeight="600" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                  Boutiques
                </StyledTypography>
                <Link to="#">
                  <StyledTypography variant="body1" fontSize="14px" fontWeight="500" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                    Open Hours
                  </StyledTypography>
                </Link>
              </div>
              <div className="d-flex fd-column" style={{gap: "8px"}}>
                <StyledTypography variant="h5" fontSize="14px" fontWeight="600" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                  Payment Methods
                </StyledTypography>
                <div className="d-flex ai-center px-1 py-1">
                  <div className="mr-3">
                    <Visa/>
                  </div>
                  <div className="mr-3">
                    <MasterCard/>
                  </div>
                  <div className="mr-3">
                    <Ethereum/>
                  </div>
                </div>
              </div>
              <div className="d-flex fd-column" style={{gap: "8px"}}>
                <StyledTypography variant="h5" fontSize="14px" fontWeight="600" color="rgba(0, 0, 0, 0.88)" className="px-1 py-1">
                  Follow Us
                </StyledTypography>
                <div className="d-flex ai-center px-1 py-1">
                  <div className="mr-5">
                    <Instagram/>
                  </div>
                  <div className="mr-5">
                    <Facebook/>
                  </div>
                  <div className="mr-5">
                    <TikTok/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </footer>
  )
}


export default BottomWrapper;