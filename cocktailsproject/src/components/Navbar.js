import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        p: 1,
        px: { xs: 1, sm: 10, md: 20, lg: 20 },
        margin: "0 auto",
        elevation: 5,
        position: "static",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 5,
        }}
      >
        {/*The Logo*/}
        <Link to="/">
          <Box
            component="img"
            src={Logo}
            sx={{
              height: "1.0rem",
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          />
        </Link>
        {/*The Links*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <Typography
              className="nav-links"
              sx={{
                fontFamily: "Roboto Mono, monospace",
                fontSize: "1.2rem",
                px: { xs: 0.2, sm: 2, md: 2, lg: 2, xl: 2 },
                color: "#000",
                underline: "none",
                transition: "all 0.3s linear",
                "&:hover": {
                  color: "#2680c0",
                },
              }}
            >
              Home
            </Typography>
          </Link>
          <Link to="/about">
            <Typography
              className="nav-links"
              sx={{
                fontFamily: "Roboto Mono, monospace",
                fontSize: "1.2rem",
                px: { xs: 0.2, sm: 2, md: 2, lg: 2, xl: 2 },
                color: "#000",
                underline: "none",
                transition: "all 0.3s linear",
                "&:hover": {
                  color: "#2680c0",
                },
              }}
            >
              About
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
