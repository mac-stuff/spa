import { Grid } from "@mui/material";

const Error = ({ error }) => {
  return (
    <Grid container sx={{ m: 5 }} justifyContent="center">
      {error}
    </Grid>
  );
};

export default Error;
