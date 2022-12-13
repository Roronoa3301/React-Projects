import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function MenuHeader() {
  return (
    <Box sx={{
        my: 5,
    }}>
      <Typography textAlign="center" fontWeight="bold" fontSize="2.5rem">
        Our Menu
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: 5,
          borderBottomColor: "#c59d5f",
          mx: "45%",
        }}
      />
    </Box>
  );
}
