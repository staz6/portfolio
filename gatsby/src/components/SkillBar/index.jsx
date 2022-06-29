import React from "react";
import { styled } from "@mui/material/styles";

const Chart = styled("div")(({ theme,width,color }) => ({
  marginBottom: "2rem",
  "& span": {
    color:"#fff",
    fontSize: "18px",
    marginBottom: "7px",
    display: "block",
  },
  "& footer": {
    backgroundColor: "#373737",
    height: "2px",

    "& div": {
      width: width,
      height: "100%",
      backgroundColor: color,
      transition: "width 1.3s ease-out",
    },
  },
}));
function SkillBar({ text, width,color }) {
  return (
    <Chart width={width} color={color}>
      <span>{text}</span>
      <footer>
          <div width={width}></div>
      </footer>
    </Chart>
  );
}

export default SkillBar;
