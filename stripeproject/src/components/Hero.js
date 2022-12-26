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
      <Navbar />
    </Box>
  );
}
