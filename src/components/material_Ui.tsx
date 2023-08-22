import { TextField, Typography, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& input": {
      backgroundColor: "#fff", 
      color: "rgba(0, 0, 0, 0.88)",
    },
    "& fieldset": {
      border: "none !important",
    },
  },
});

const StyledInputLabel = styled(InputLabel)({
  marginBottom: "8px",
});

const CustomFormControl = styled(FormControl)({
  display: "block",
  marginTop: "0",
});

const StyledTypography = styled(Typography)<{ fontSize:string, fontWeight: string }>(({ fontSize, fontWeight }) => ({
  fontSize, 
  fontWeight,
}));



export { StyledTextField, StyledInputLabel, CustomFormControl, StyledTypography };