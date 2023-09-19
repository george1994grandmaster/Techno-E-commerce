import { TextField, Typography, InputLabel, FormControl, AccordionSummary } from '@mui/material';
import Accordion from '@mui/material/Accordion';

import { styled } from '@mui/system';

const StyledTextField = styled(TextField)<{
  padding?: string,
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  }>(({ padding, fontSize, fontWeight, color }) => ({

  padding,
  fontSize,
  fontWeight,
  color,

  "& .MuiOutlinedInput-root": {
    "& input": {
      backgroundColor: "#fff", 
      color: "rgba(0, 0, 0, 0.88)",
      
      padding: padding ? `${padding}` : '15px',
    },
    "& fieldset": {
      border: "none !important",
    },
  },
}));

const StyledInputLabel = styled(InputLabel)({
  marginBottom: "8px",
  color: "rgba(0, 0, 0, 0.88)",
});

const CustomFormControl = styled(FormControl)({
  display: "block",
  marginTop: "0",
});

const StyledTypography = styled(Typography)<{ fontSize:string, fontWeight: string, color?: string }>(({ fontSize, fontWeight, color }) => ({
  fontSize, 
  fontWeight,
  color,
}));




export { StyledTextField, StyledInputLabel, CustomFormControl, StyledTypography };