import React from "react";
import { useGlobalContext } from "../context/Context";
import { Box, Typography, Grid, Button, IconButton } from "@mui/material";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, toggleAmount } = useGlobalContext();
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      display="flex"
      pt={2}
    >
      <Grid item xs={2}>
        <Box component="img" src={img} width="70%" />
      </Grid>
      <Grid item xs={9} flexDirection="column">
        <Typography
          variant="h5"
          sx={{
            fontSize: "1.0rem",
            fontWeight: "bold",
            fontFamily: "Roboto Mono, monospace",
            textTransform: "capitalize",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.0rem",
            fontFamily: "Roboto Mono, monospace",
            color: "#617d98",
          }}
        >
          ${price}
        </Typography>
        <Button
          variant="text"
          sx={{
            backgroundColor: "transparent",
            color: "#5c89c7",
            textTransform: "lowercase",
            fontFamily: "Roboto Mono, monospace",
            p: 0,
            m: 0,
          }}
          onClick={() => removeItem(id)}
        >
          Remove
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              color: "#5c89c7",
            }}
            onClick={() => toggleAmount(id, "increase")}
          >
            <FaChevronUp />
          </IconButton>
          {amount}
          <IconButton
            sx={{
              color: "#5c89c7",
            }}
            onClick={() => toggleAmount(id, "decrease")}
          >
            <FaChevronDown />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CartItem;
