import React from "react";
import { Box } from "@mui/material";

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
        display: "flex",
        padding: "0",
        margin: "0",
        height: "100%",
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
