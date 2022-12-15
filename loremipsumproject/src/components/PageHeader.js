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
        fontSize="1.9rem"
        color="#06325b"
        paddingRight={3}
        fontFamily="Roboto Mono"
      >
        TIRED OF BORING LOREM IPSUM?
      </Typography>
    </Box>
  );
}
