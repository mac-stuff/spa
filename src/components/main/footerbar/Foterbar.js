import React from "react";
import styled from "styled-components";
import { AppBar, Typography } from "@mui/material";

const CustomToolbar = styled(AppBar)({
  textAlign: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "5px",
});

const Foterbar = () => {
  return (
    <CustomToolbar position="sticky">
      <Typography>2023</Typography>
    </CustomToolbar>
  );
};

export default Foterbar;
