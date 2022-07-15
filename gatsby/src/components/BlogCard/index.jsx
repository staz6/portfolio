import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const ItemPaper = styled(Paper)(({ theme, colorCode }) => ({
  padding: "3rem 3rem 2.5rem",
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  fontFamily: "Poppins",
  // padding: theme.spacing(1),
  // textAlign: 'center',
  minHeight: "20vh",
  color: theme.palette.text.secondary,
  borderRadius: "none",
  backgroundColor: theme.palette.bg,
  borderTop: `2px solid ${colorCode}`,
  boxShadow:
    "0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);",
  "& h4": {
    color: colorCode,
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "3px",
    border: 0,
    marginBottom: "1rem",
    marginTop: "1rem",
    display: "block",
  },
  "& h1": {
    fontSize: "27px",
    letterSpacing: 0,
    height: "80px",
    color: "#fff",
    fontWeight: 400,
    lineHeight: "35px",
    textDecoration: "none",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  "& p": {
    color: theme.palette.subText,
  },
}));

function BlogCard({ val, index }) {
  const calcAos = (index) => {
    let tmp = (index + 1) % 3;
    if (tmp === 1) return "fade-right";
    else if (tmp === 2) return "fade-up";
    else return "fade-left";
  };
  return (
    <Grid
      item
      lg={4}
      md={12}
      colorCode={val.color}
      key={index}
      data-aos={calcAos(index)}
    >
      <ItemPaper colorCode={val.color}>
        <h4>{val.category}</h4>
        <h1>{val.title}</h1>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus...{" "}
        </p>
      </ItemPaper>
    </Grid>
  );
}

export default BlogCard;
