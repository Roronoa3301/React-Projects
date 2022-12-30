import React from "react";
import { useGlobalContext } from "../context/Context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import LoadingAnimation from "./Loading";
import { Box } from "@mui/material";

const Cart = () => {
  const { loading } = useGlobalContext();
  return loading ? (
    <LoadingAnimation />
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <CartContainer />
    </Box>
  );
};

export default Cart;
