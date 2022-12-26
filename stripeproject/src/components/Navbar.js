import React from "react";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import { useGlobalContext } from "../Context/Context";

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
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
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              fontSize: "1.1rem",
              fontFamily: "Roboto Mono, monospace",
              color: "white",
              background: "transparent",
              borderColor: "transparent",
              letterSpacing: "1px",
              width: "10rem",
              transition: "all 0.3s linear",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Products
          </Button>
          <Button
            sx={{
              fontSize: "1.1rem",
              fontFamily: "Roboto Mono, monospace",
              color: "white",
              background: "transparent",
              borderColor: "transparent",
              letterSpacing: "1px",
              width: "10rem",
              transition: "all 0.3s linear",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Developers
          </Button>
          <Button
            sx={{
              fontSize: "1.1rem",
              fontFamily: "Roboto Mono, monospace",
              color: "white",
              background: "transparent",
              borderColor: "transparent",
              letterSpacing: "1px",
              width: "10rem",
              transition: "all 0.3s linear",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Company
          </Button>
        </Box>

        <Button
          sx={{
            fontSize: "1rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "0.25rem",
            color: "white",
            background: "black",
            borderColor: "transparent",
            transition: "all 0.3s linear",
            cursor: "pointer",
            "&:hover": {
              background: "#617D98",
            },
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
        <Button
          sx={{
            fontSize: "1rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "0.25rem",
            color: "white",
            background: "black",
            borderColor: "transparent",
            transition: "all 0.3s linear",
            cursor: "pointer",
            "&:hover": {
              background: "#617D98",
            },
            justifyContent: "start",
          }}
        >
          Start now
        </Button>
      </Toolbar>
    </AppBar>
  );
}
