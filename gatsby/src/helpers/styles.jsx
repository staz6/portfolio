import { styled } from "@mui/material/styles";

export const VFlex = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const MHeading = styled("h2")(
  ({ theme, fontSize, type, marginTop,letterSpacing }) => ({
    color: type ? theme.palette[type] : theme.palette.main,
    fontSize: fontSize ? fontSize : "1.6rem",
    marginTop: marginTop,
    letterSpacing:letterSpacing
  })
);

export const SubText = styled("p")(({ theme }) => ({
  color: theme.palette.subText,
  marginTop: "10px",
}));
