import React from "react";
import { styled } from "@mui/material/styles";
import { VFlex } from "../../helpers/styles";
import RubberBand from "../RubberBand";

const ContentContainer = styled(VFlex)(({ theme, marginTop }) => ({
  justifyContent: "space-between",
  border: `3px solid ${theme.palette.primary.main}`,
  borderLeft: "none",
  padding: "5vh 2vh",
  marginTop: marginTop,
}));
const Line = styled(VFlex)(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  height: "10vh",
  justifyContent: "space-around",
  color: theme.palette.primary.secondary,
}));

function index(props) {
  return (
    <div data-aos={props.aos}>
      <ContentContainer marginTop={props.marginTop}>
        {props.children}
      </ContentContainer>
      <Line>
        {[...Array(6)].map((val, key) => {
          return (
            <div>
              <RubberBand text={"/"} />
            </div>
          );
        })}
      </Line>
    </div>
  );
}

export default index;
