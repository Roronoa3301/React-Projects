import React from "react";
import { useGlobalContext } from "../context/Context";
import { Box, Typography, Divider, Button } from "@mui/material";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          pt: 13,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#102a42",
            fontFamily: "Roboto Mono, monospace",
            fontSize: "3rem",
            textTransform: "uppercase",
          }}
        >
          Your Bag
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              pt: 4,
              fontSize: "1.5rem",
              color: "#617d98",
              fontFamily: "Roboto Mono, monospace",
            }}
          >
            is currently empty
          </Typography>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        pt: 13,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontFamily: "Roboto Mono, monospace",
          fontSize: "3rem",
          textTransform: "uppercase",
          color: "#102a42",
        }}
      >
        Your Bag
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 1,
        }}
      >
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </Box>
      <Divider
        sx={{
          mt: 6,
          borderBottomWidth: 3,
          borderBottomColor: "#7b93a9",
          width: "90%",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          mt: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "Roboto Mono, monospace",
          }}
        >
          Total
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "Roboto Mono, monospace",
          }}
        >
          ${total}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
        }}
      >
        <Button
          sx={{
            color: "#BB2525",

            border: "1px solid #707070",
            borderRadius: "5px",
            borderColor: "#BB2525",
            "&:hover": {
              backgroundColor: "#BB2525",
              color: "#fff",
            },
            mb: 4,
            fontFamily: "Roboto Mono, monospace",
            fontWeight: "bold",
            fontSize: "1.2rem",
            letterSpacing: "1px",
            width: { xs: "80%", sm: "70%", md: "60%", lg: "60%" },
          }}
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      </Box>
    </Box>
  );
};

export default CartContainer;
