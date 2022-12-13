import React from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingAnimation() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 30,
      }}
    >
      <CircularProgress sx={{ color: "#2caeba" }} />
    </Box>
  );
}
