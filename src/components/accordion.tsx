import React, { FC } from 'react';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import { StyledTypography } from './material_Ui'; 
import Accordion from '@mui/material/Accordion';
import { AccordionArrow } from './svgFormat'; 

const AccordionComponent: FC = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary>
          <StyledTypography fontSize="14px" fontWeight="500" color="rgba(0, 0, 0, 0.88)">
            Delivery & Returns
          </StyledTypography>
          <AccordionArrow/>
        </AccordionSummary>
        <AccordionDetails>
        <StyledTypography variant="body1" fontSize="14px" fontWeight="500" color="rgba(0, 0, 0, 0.88)">
          For details on Deliveries please refer to the Shipping & Delivery tab below.
          For details on Returns please refer to the Returns & Refunds tab below.
        </StyledTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <StyledTypography fontSize="14px" fontWeight="500" color="rgba(0, 0, 0, 0.88)">
            Payments
          </StyledTypography>
          <AccordionArrow/>
        </AccordionSummary>
        <AccordionDetails>
        <StyledTypography variant="body1" fontSize="14px" fontWeight="500" color="rgba(0, 0, 0, 0.88)">
          For details on Payments please refer to the Payment Options tab below.
        </StyledTypography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;