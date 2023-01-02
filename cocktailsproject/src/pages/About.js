import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          my: 10,
          fontWeight: "bold",
          fontFamily: "Roboto Mono, monospace",
          fontSize: "2.2rem",
        }}
      >
        About Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Roboto Mono, monospace",
          width: { xs: "90%", sm: "90%", md: "70%", lg: "50%", xl: "50%" },
          fontSize: "1.2rem",
          letterSpacing: "0.1rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </Typography>
    </Box>
  );
};

export default About;
