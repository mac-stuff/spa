import React, { useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const url = "https://reqres.in/api/products";
      try {
        const result = await (await fetch(url)).json();
        result.data.forEach((product) =>
          setProducts((products) => [...products, product])
        );
      } catch (err) {
        console.log(err);
      }
    };
    dataFetch();
  }, []);

  return (
    <Grid item>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={20}
      >
        <Typography variant="body2" gutterBottom color="textPrimary">
          name
        </Typography>
        <Typography variant="body2" gutterBottom color="textPrimary">
          color
        </Typography>
        <Typography variant="body2" gutterBottom color="textPrimary">
          year
        </Typography>
        <Typography variant="body2" gutterBottom color="textPrimary">
          pantone
        </Typography>
      </Stack>
      {products.map((product, index) => {
        return (
          <Stack
            key={index}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={20}
          >
            <Typography variant="body2" gutterBottom color="textSecondary">
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              color="textSecondary"
              sx={{ backgroundColor: product.color }}
            >
              {product.color}
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {product.year}
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {product.pantone_value}
            </Typography>
          </Stack>
        );
      })}
    </Grid>
  );
};

export default Main;
