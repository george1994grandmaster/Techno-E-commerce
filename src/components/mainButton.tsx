import { FC } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface BtnProps {
  text: string;
  color: string;
  bgColor: string;
  border?: string;
  innerSpacing: string;
  onClick?: () => void;
}

const MainBtn: FC<BtnProps> = ({ text, color, bgColor, border, innerSpacing, onClick }) => {
  const buttonStyles = {
    padding: innerSpacing,
    color: color,
    backgroundColor: bgColor,
    border: border,
   
    '&:hover': {
      backgroundColor: bgColor === "transparent" ? "transparent" : bgColor === "#00381f" ? "#0b4529" : bgColor,
      border: border === "1px solid #d9d9d9" ? "1px solid rgba(0, 0, 0, 0.88)": "none",
    },
  };

  return (
    <Button sx={buttonStyles} onClick={onClick} disableRipple >
      <Typography variant="button" component="span" sx={{ fontFamily: "Montserrat, sans-serif", textTransform: "none" }}>{text}</Typography>
    </Button>
  );
};

export default MainBtn;