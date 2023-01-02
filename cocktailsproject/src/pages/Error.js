import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
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
        sx={{
          mt: 10,
          mb: 5,

          fontWeight: "bold",
          fontFamily: "Roboto Mono, monospace",
        }}
      >
        It's a dead end
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          color: "#fff",
          backgroundColor: "#476a2e",
          transition: "all 0.3s linear",
          "&:hover": {
            backgroundColor: "#d4e6a5",
            color: "#476a2e",
          },
          fontFamily: "Roboto Mono, monospace",
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Error;
