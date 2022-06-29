import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")({
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: "10vh",
});

function MainLayout(props) {
  return <Container>{props.children}</Container>;
}

export default MainLayout;
