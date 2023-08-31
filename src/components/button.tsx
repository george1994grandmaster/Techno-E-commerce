import { FC, ReactElement } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface BtnProps {
  text?: string;
  height?: string;
  color?: string;
  bgColor?: string;
  border?: string;
  svg?: ReactElement<SVGElement>;
  innerSpacing?: string;
  onClick?: () => void;
}

const MainBtn: FC<BtnProps> = ({ text, color, bgColor, height, border, innerSpacing, svg, onClick }) => {
  const buttonStyles = {
    height: height,
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
    <Button sx={buttonStyles} onClick={onClick} disableRipple>
      {svg ? (
        svg
      ) : (
        <Typography
          variant="button"
          component="span"
          sx={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'none' }}
        >
          {text}
        </Typography>
      )}
    </Button>
  );
};

export default MainBtn;