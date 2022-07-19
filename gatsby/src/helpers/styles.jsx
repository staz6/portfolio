import { styled } from "@mui/material/styles";

export const CenterContainer = styled("div")(({ theme }) => ({
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
}));
export const VFlex = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const MHeading = styled("h2")(
  ({ theme, fontSize, type, marginTop, letterSpacing }) => ({
    color: type ? theme.palette.primary[type] : theme.palette.primary.secondary,
    fontSize: fontSize ? fontSize : "1.6rem",
    marginTop: marginTop,
    letterSpacing: letterSpacing,
    fontFamily: "theme.typography.fontFamily",
  })
);

export const SubText = styled("p")(({ theme }) => ({
  color: theme.palette.primary.subText,
  marginTop: "10px",
  fontFamily: "theme.typography.fontFamily",
}));
