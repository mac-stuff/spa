import React, { useState } from "react";

import Searchbar from "./searchbar/Searchbar";
import Footerbar from "./footerbar/Foterbar";
import Main from "../main/Main";

import { Container } from "@mui/system";

const Layout = () => {
  const [searchedProduct, setSearchedProduct] = useState();

  return (
    <Container>
      <Searchbar setSearchedProduct={setSearchedProduct} />
      <Main searchedProduct={searchedProduct} />
      <Footerbar />
    </Container>
  );
};

export default Layout;
