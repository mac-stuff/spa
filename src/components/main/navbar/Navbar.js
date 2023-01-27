import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const CustomTypography = styled(Typography)({
  textDecoration: "none",
  color: "secondary",
});

const Navbar = () => {
  return (
    <AppBar position="static">
      <CustomToolbar>
        <CustomTypography
          color="secondary"
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          SPA-APP
        </CustomTypography>
        <Button
          variant="contained"
          sx={{ display: { xs: "block", sm: "none" } }}
        ></Button>
        <Stack direction="row" sx={{ display: { xs: "none", sm: "block" } }}>
          <Button variant="contained" color="primary">
            Navbar
          </Button>
        </Stack>
      </CustomToolbar>
    </AppBar>
  );
};

export default Navbar;
