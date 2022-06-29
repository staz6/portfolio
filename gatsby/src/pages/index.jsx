import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import MainLayout from "../layout/MainLayout";
import Navbar from "../components/Navbar";
import Home from "./Home";

const theme = createTheme({
  typography: {
    "fontFamily":"Poppins"
  },
  palette: {
    blue: "#08fdd8",
    main: "#fff",
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
  const [tab,setTab] =React.useState("Portfolio")

  const handleSetTab = (value) => {
    setTab(value)
  }
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Navbar  handleSetTab={handleSetTab}/>
        <Home tab={tab}/>
      </MainLayout>
    </ThemeProvider>
  );
};

export default IndexPage;
