import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/ContextData";

export default function ModalBox() {
  const { closeModal } = useGlobalContext();
  return (
    <Box>
      <Button
        sx={{
          fontSize: "1.75rem",
          background: "transparent",
          borderColor: "transparent",
          position: "fixed",
          top: "1rem",
          right: "1rem",
          color: "#bb2525",
          cursor: "pointer",
          transition: "all 0.3s linear",
          "&:hover": {
            color: "#ec7570",
          },
        }}
        onClick={closeModal}
      >
        <FaTimes />
      </Button>

      <Typography variant="h4">Modal Content</Typography>
    </Box>
  );
}
