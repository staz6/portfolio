import React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const Container = styled(Grid)({
  width: "100%",
  height: "8vh",
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

const NavMenu = styled(Grid)(({ theme }) => ({
  position: "relative",
  color: theme.palette.main,
  textAlign:"right"
}));
const NavLink = styled("a")(({ theme }) => ({
  fontFamily:"Poppins",
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
const links = ["Portfolio","Skills" ,"Contact", "Blog"];

function index({handleSetTab}) {
  const GetLinks = () => {
    return links.map((val, key) => {
      return (
        <NavLink
          key={key}
          style={key === 3 ? { paddingRight: "0px" } : null}
          onClick={(e)=>{handleSetTab(val)}}
        >
          {val}
        </NavLink>
      );
    });
  };
  return (
    <Container container>
      <Grid item lg={6} md={6}>
      <Link href="/">Muhammad Aahad</Link>
      </Grid>
      <NavMenu item lg={6} md={6}>
        <GetLinks />
      </NavMenu>
    </Container>
  );
}

export default index;
