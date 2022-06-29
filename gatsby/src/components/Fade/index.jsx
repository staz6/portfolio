import React from "react";
import { styled } from "@mui/material/styles";
// rgba(0, 0, 0, 0.5);

const FadeDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
function Fade({ parentId }) {
  return (
    <FadeDiv>
      <p style={{ color: "#aeaeae", fontSize: "1.2rem",fontFamily:"Poppins" }}>Coming soon...</p>
    </FadeDiv>
  );
}

export default Fade;
