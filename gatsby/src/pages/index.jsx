import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import MainLayout from "../layout/MainLayout";
import Navbar from "../components/Navbar";
import Home from "./Home";

const theme = createTheme({
  palette: {
    blue: "#08fdd8",
    main: "#fff",
    subText: "#aeaeae",
    bg:"#1d1d1d"
  },
  blogs:{
    net:"#a62dd8",
    react:"#61dafb",
    htb:"#bbff34"
  }
});

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Navbar />
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
};

export default IndexPage;
