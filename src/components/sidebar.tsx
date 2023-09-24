import { FC, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarPosition, selectSidebarPosition } from '../store/sidebarSlice';
import { filterProductsByCategories, selectAllProducts } from '../store/productsSlice';
import Button from "./button";
import { CloseBtn } from "./svgFormat";
import { SidebarCondition } from "../types";

const Sidebar: FC<SidebarCondition> = (/*{ sidebarCondition, closeSidebar }*/) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSidebarOpen: boolean = useSelector(selectSidebarPosition);

  useEffect(() => {
    dispatch(setSidebarPosition(false));
  }, [dispatch, location]);

  const filterProductsByCategory = (item: string) => {
    navigate(`/products/categories/${item}`);
    //dispatch(filterProductsByCategories(item as any));
  }
 
  const closeSidebar = () => {
    dispatch(setSidebarPosition(false));
  };


  const sidebarItems = ["watches", "jewellery", "headphones", "bags"];

  return (
    <div className={`sidebar-wrapper ${isSidebarOpen ? "" : "hide"}`}>
      <div className="close-btn">
        <Button svg={<CloseBtn/>} bgColor="transparent"  onClick={closeSidebar}/>
      </div>
      <div className="d-flex fd-column jc-between" style={{height: "100%"}}>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Button text={item} bgColor="transparent" color="rgba(0, 0, 0, 0.88)" innerSpacing="8px" onClick={() => filterProductsByCategory(item)}/>
            </li>
          ))}
        </ul>
        <div>
          <Button text="Contact Us" bgColor="transparent" fontSize="14px" color="rgba(0, 0, 0, 0.88)" innerSpacing="8px" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;