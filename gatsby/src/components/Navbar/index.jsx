import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")({
  width: "100%",
  height: "8vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
});
const Link = styled("a")(({ theme }) => ({
  position: "relative",
  // float: 'left',
  textDecoration: "none",
  color: theme.palette.main,
  fontSize: "1.3rem",
}));

const NavMenu = styled("div")(({ theme }) => ({
  position: "relative",
  // float:"right",
  color: theme.palette.main,
}));
const NavLink = styled("a")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  verticalAlign: "top",
  textDecoration: "none",
  // padding: '20px',
  textAlign: "left",
  // marginLeft: 'auto',
  // marginRight: 'auto',
  color: theme.palette.main,
  textTransform: "uppercase",
  // paddingTop: '5px',
  paddingRight: "40px",
  // paddingBottom: '5px',
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.blue,
  },
}));
const links = ["Portfolio", "Contact", "blog"];

function index() {
  const GetLinks = () => {
    return links.map((val, key) => {
      return (
        <NavLink
          key={key}
          href="/"
          style={key === 2 ? { paddingRight: "0px" } : null}
        >
          {val}
        </NavLink>
      );
    });
  };
  return (
    <Container>
      <Link href="/">Muhammad Aahad</Link>
      <NavMenu>
        <GetLinks />
      </NavMenu>
    </Container>
  );
}

export default index;
