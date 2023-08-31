import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContentValue, updateValue } from "../store/topContentSlice";
import { StyledTypography } from './material_Ui';
import { useLocation } from 'react-router-dom';

const TopWrapper: FC = () => {
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const topContentValue = useSelector(selectContentValue);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    switch (currentPath) {
      case "/products":
        dispatch(updateValue("collection"));
        break;
      case "/auth":
        dispatch(updateValue("Log In / Create a New Account"));
        break;
      default:
      break;
    }
  }, [currentPath, dispatch]);

  return (
    <>
      {currentPath === "/products" || currentPath === "/products/detail" || currentPath === "/auth" || currentPath === "/shopping" ? (
        <div className="py-8 bg-light">
          <StyledTypography variant="h2" fontSize="19px" fontWeight="600" color="rgba(0, 0, 0, 0.88);">
            {topContentValue}
          </StyledTypography>
        </div>
      ) : null}
    </>
  );
}

export default TopWrapper;