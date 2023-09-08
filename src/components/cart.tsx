import React, { FC, useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCartProducts, selectTranslatedcount } from '../store/productsSlice';
import { CartIcon } from "./svgFormat";
import {  StyledTypography } from './material_Ui';


const Cart: FC = () => {
  const cartItems = useSelector(selectCartProducts);
  const translatedCount = useSelector(selectTranslatedcount);
  const [totalProductCount, setTotalProductCount] = useState<number>(0);
  const typographyRef = useRef<HTMLDivElement | null>(null); 
  
  
  useEffect(() => {
    const productQuantity = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity;
    }, 0);
    setTotalProductCount(productQuantity);
  }, [cartItems]);

  useEffect(() => {
    if (typographyRef.current) {
      typographyRef.current.style.animation = 'animate 0.2s cubic-bezier(.645, .045, .355, 1)';
      void typographyRef.current.offsetWidth; 
      typographyRef.current.style.animation = 'slideIn 0.2s cubic-bezier(.645, .045, .355, 1)'; // Apply animation
    }
  }, [totalProductCount]);


  return (
    <div className="cart-content">
      <StyledTypography color="#fff" variant="body1" fontSize="11px" fontWeight="600" ref={typographyRef}>
        {totalProductCount}
      </StyledTypography>
    </div>
  )
}

export default Cart;