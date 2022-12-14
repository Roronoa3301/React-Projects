import React from "react";
import { Box, Typography } from "@mui/material";

export default function PageHeader() {
  return (
    <Box
      sx={{
        my: 6,
        display: "flex",
        justifyContent: "center",
        mx: 2,
      }}
    >
      <Typography
        textAlign="center"
        fontWeight="bold"
        fontSize="2.5rem"
        color="#ba5d2c"
        paddingRight={3}
        fontFamily="Roboto Mono"
      >
        /
      </Typography>
      <Typography
        textAlign="center"
        fontWeight="bold"
        fontSize="2.5rem"
        color="#324d67"
        fontFamily="Roboto Mono"
      >
        Reviews
      </Typography>
    </Box>
  );
}
