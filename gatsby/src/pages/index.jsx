import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import MainLayout from "../layout/MainLayout";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Seo from "../components/Seo";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary:{
      main:"#08fdd8",
      secondary:"#fff"
    },
    subText: "#aeaeae",
    bg: "#1d1d1d",
  },
  blogs: {
    net: "#a62dd8",
    react: "#61dafb",
    htb: "#bbff34",
  },
});

// markup
const IndexPage = () => {
  const [tab, setTab] = React.useState("Portfolio");

  const handleSetTab = (value) => {
    setTab(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Seo />
        <Navbar handleSetTab={handleSetTab} />
        <Home tab={tab} />
      </MainLayout>
    </ThemeProvider>
  );
};

export default IndexPage;
