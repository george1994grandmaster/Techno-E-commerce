import { FC, useState, useEffect } from "react";
import { StyledTypography } from '../components/material_Ui';
import Button from "./button";
import { CloseBtn } from "./svgFormat";
import { SidebarCondition } from "../types";

const Sidebar: FC<SidebarCondition> = ({ sidebarCondition, closeSidebar }) => {

  //const [isSidebarClosed, setIsSidebarClosed] = useState<boolean>(sidebarCondition);

  const sidebarItems = ["Watches", "Jewellery", "Glasses", "Bags"];

  return (
    <div className={`sidebar-wrapper ${sidebarCondition ? "" : "hide"}`}>
      <div className="close-btn">
        <Button svg={<CloseBtn/>} bgColor="transparent"  onClick={closeSidebar}/>
      </div>
      <div className="d-flex fd-column jc-between" style={{height: "100%"}}>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Button text={item} bgColor="transparent" color="rgba(0, 0, 0, 0.88)" innerSpacing="8px" onClick={() => closeSidebar()}/>
            </li>
          ))}
        </ul>
        <div>
          <Button text="Contact Us" bgColor="transparent" fontSize="14px" color="rgba(0, 0, 0, 0.88)" innerSpacing="8px"/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;