import React from "react";
import Navbar from "../main/footerbar/Foterbar";
import Searchbar from "../main/searchbar/Searchbar";
import Footerbar from "../main/footerbar/Foterbar";
import Main from "../main/Main";

import { Container } from "@mui/system";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Searchbar />
      <Main />
      <Footerbar />
    </Container>
  );
};

export default Layout;
