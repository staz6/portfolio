import { styled } from "@mui/material/styles";
import React from "react";

const StyledButton = styled("button")(({ theme }) => ({
  marginTop: "2vh",
  display: "inline-block",
  padding: "1em 3em",
  fontSize: "0.9rem",
  textAlign: "center",
  letterSpacing: "4px",
  fontFamily: "Poppins",
  color: theme.palette.primary.main,
  background: theme.palette.bg /* default color */,
  border: `2px solid ${theme.palette.primary.main}`,

  background: `linear-gradient(to left, ${theme.palette.bg} 50%, ${theme.palette.primary.main} 50%) right`,
  backgroundSize: "200%",
  transition: "0.3s ease-out",
  "&:hover": {
    backgroundPosition: "left",
    transition: "0.4s ease-in",
    color: "#000",
  },
}));

function CustomButton({ text, onClick }) {
  return (
    <StyledButton
      onClick={(e) => {
        return onClick();
      }}
    >
      {text}
    </StyledButton>
  );
}

export default CustomButton;
