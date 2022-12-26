import React from "react";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem",
          transition: "all 0.3s linear",
        }}
      >
        <Box
          component="img"
          src={Logo}
          sx={{
            height: "2.5rem",
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        />

        <Button
          sx={{
            fontSize: "1.5rem",
            color: "#49a6e9",
            background: "transparent",
            borderColor: "transparent",
            transition: "all 0.3s linear",
            cursor: "pointer",
            "&:hover": {
              color: "#102A42",
              transform: "rotate(90deg)",
            },
            alignItems: "end",
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <FaBars />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
