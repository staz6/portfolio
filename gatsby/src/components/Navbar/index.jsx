import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid,useMediaQuery } from "@mui/material";
import { CenterContainer } from "../../helpers/styles";
import { useTheme } from "@emotion/react";
import ResponsiveNavbar from './ResponsiveNavbar'
const Container = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "8vh",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  [theme.breakpoints.down("md")]: {
    "& a": {
      paddingRight: "29px",
    },
  },
  // [theme.breakpoints.down("sm")]: {
  //   textAlign: "center",
  //   "& a": {
  //     paddingRight: "29px",
  //   },
  // },
}));
const Link = styled("a")(({ theme }) => ({
  position: "relative",
  // float: 'left',
  fontFamily: "theme.typography.fontFamily",
  textDecoration: "none",
  color: theme.palette.primary.secondary,
  fontSize: "1.3rem",
  // [theme.breakpoints.down("sm")]: {
  //   paddingTop: "10px",
  //   paddingBottom: "10px",
  // },
}));

const NavMenu = styled(Grid)(({ theme }) => ({
  position: "relative",
  color: theme.palette.primary.secondary,
  textAlign: "right",
}));
const NavLink = styled("a")(({ theme }) => ({
  fontFamily: "theme.typography.fontFamily",
  position: "relative",
  display: "inline-block",
  verticalAlign: "top",
  textDecoration: "none",
  // padding: '20px',
  textAlign: "left",
  // marginLeft: 'auto',
  // marginRight: 'auto',
  color: theme.palette.primary.secondary,
  textTransform: "uppercase",
  // paddingTop: '5px',
  paddingRight: "40px",
  // paddingBottom: '5px',
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
const Bar = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "theme.typography.fontFamily",
}));
const links = ["Portfolio", "Skills", "Contact", "Blog"];

const GetLinks = ({handleSetTab}) => {
  return links.map((val, key) => {
    return (
      <NavLink
        key={key}
        style={key === 3 ? { paddingRight: "0px" } : null}
        onClick={(e) => {
          handleSetTab(val);
        }}
      >
        {val}
      </NavLink>
    );
  });
};


function Navbar({ handleSetTab }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  

  return (
    <CenterContainer>
      <Container container>
        <Grid item lg={6} md={6} sm={6} xs={10}>
          <Link href="/">
            <Bar>/</Bar> Muhammad Aahad
          </Link>
        </Grid>
        {isMobile ? <ResponsiveNavbar handleSetTab={handleSetTab}/> :
        <NavMenu item lg={6} md={6} sm={6} xs={2}>
        <GetLinks handleSetTab={handleSetTab} />
      </NavMenu>}
      </Container>
    </CenterContainer>
  );
}

export default Navbar;
