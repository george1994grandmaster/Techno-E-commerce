import { TextField, Typography, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)<{
  inputSpace: string,
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  }>(({ inputSpace, fontSize, fontWeight, color }) => ({

  inputSpace,
  fontSize,
  fontWeight,
  color,

  "& .MuiOutlinedInput-root": {
    "& input": {
      backgroundColor: "#fff", 
      color: "rgba(0, 0, 0, 0.88)",
      
      padding: inputSpace ? `${inputSpace}` : '15px',
    },
    "& fieldset": {
      border: "none !important",
    },
  },
}));

const StyledInputLabel = styled(InputLabel)({
  marginBottom: "8px",
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