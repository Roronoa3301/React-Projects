import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function PageHeader() {
  return (
    <Box
      sx={{
        my: 5,
      }}
    >
      <Typography textAlign="center" fontWeight="bold" fontSize="2.5rem">
        Experience
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: 5,
          borderBottomColor: "#2caeba",
          mx: "45%",
        }}
      />
    </Box>
  );
}
