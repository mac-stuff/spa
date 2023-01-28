import React, { useEffect, useState } from "react";

import Popup from "./Popup";
import BasicPagination from "./BasicPagination";

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Main = ({ searchedProduct }) => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchedProduct
            ? products
                .filter((product) => product.id === searchedProduct)
                .map((product) => (
                  <TableRow
                    key={product.id}
                    onClick={() => {
                      setModalInfo(product);
                      setOpen(true);
                    }}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                        backgroundColor: product.color,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {product.id}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {product.name}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {product.year}
                    </TableCell>
                  </TableRow>
                ))
            : products.slice(startIndex, endIndex).map((product) => (
                <TableRow
                  key={product.id}
                  onClick={() => {
                    setModalInfo(product);
                    setOpen(true);
                  }}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: product.color,
                  }}
                >
                  <TableCell component="th" scope="row">
                    {product.id}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {product.name}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {product.year}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      {open && <Popup open={open} setOpen={setOpen} modalInfo={modalInfo} />}
      <BasicPagination
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        endIndex={endIndex}
        setEndIndex={setEndIndex}
      />
    </TableContainer>
  );
};

export default Main;
