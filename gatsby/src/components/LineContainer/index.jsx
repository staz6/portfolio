import React from "react";
import { styled } from "@mui/material/styles";
import { VFlex } from "../../helpers/styles";
import RubberBand from "../RubberBand";

const ContentContainer = styled(VFlex)(({ theme,marginTop }) => ({
  justifyContent: "space-between",
  border: `3px solid ${theme.palette.blue}`,
  borderLeft: "none",
  padding: "5vh 2vh",
  marginTop:marginTop
}));
const Line = styled(VFlex)(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.blue}`,
  height: "10vh",
  justifyContent: "space-around",
  color: theme.palette.main,
}));

function index(props) {
  return (
    <>
      <ContentContainer marginTop={props.marginTop}>{props.children}</ContentContainer>
      <Line>
        {[...Array(6)].map((val, key) => {
          return (
            <div>
              <RubberBand text={"/"} />
            </div>
          );
        })}
      </Line>
    </>
  );
}

export default index;
