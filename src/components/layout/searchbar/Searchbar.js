import React from "react";
import styled from "styled-components";

import { AppBar, Toolbar, InputBase } from "@mui/material";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const CustomInputBase = styled(InputBase)({
  padding: "5px",
  border: "1px solid #3b3a30",
  borderRadius: "5px",
  width: "50%",
  backgroundColor: "#b2c2bf",
});

const Searchbar = ({ setSearchedProduct }) => {
  return (
    <AppBar position="static">
      <CustomToolbar>
        <CustomInputBase
          placeholder="Search"
          type="number"
          onChange={(event) => setSearchedProduct(event.target.valueAsNumber)}
        />
      </CustomToolbar>
    </AppBar>
  );
};

export default Searchbar;
