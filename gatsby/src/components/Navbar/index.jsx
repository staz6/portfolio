import React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { CenterContainer } from "../../helpers/styles";

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
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& a": {
      paddingRight: "29px",
    },
  },
}));
const Link = styled("a")(({ theme }) => ({
  position: "relative",
  // float: 'left',
  fontFamily: "theme.typography.fontFamily",
  textDecoration: "none",
  color: theme.palette.primary.secondary,
  fontSize: "1.3rem",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
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

function index({ handleSetTab }) {
  const GetLinks = () => {
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
  return (
    <CenterContainer>
      <Container container>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Link href="/">
            <Bar>/</Bar> Muhammad Aahad
          </Link>
        </Grid>
        <NavMenu item lg={6} md={6} sm={6} xs={12}>
          <GetLinks />
        </NavMenu>
      </Container>
    </CenterContainer>
  );
}

export default index;
