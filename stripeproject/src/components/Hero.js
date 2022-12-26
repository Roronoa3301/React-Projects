import React from "react";
import {
  Container,
  Box,
  Popover,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";

import HeroImage from "../assets/hero.svg";

import Navbar from "./Navbar";
import MainContent from "./MainContent";

export default function Hero() {
  return (
    <Box
      sx={{
        background: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontFamily: "Roboto Mono, monospace",
      }}
    >
      <Box
        sx={{
          pb: "1rem",
          background: "transparent",
        }}
      >
        <Navbar />
      </Box>
      <Box
        sx={{
          background: "transparent",
        }}
      >
        <MainContent />
      </Box>
    </Box>
  );
}
