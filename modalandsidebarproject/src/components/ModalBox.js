import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/ContextData";

export default function ModalBox() {
  const { closeModal } = useGlobalContext();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            fontSize: "1.75rem",
            background: "transparent",
            borderColor: "transparent",
            color: "#34506a",
            cursor: "pointer",
            transition: "all 0.3s linear",
            "&:hover": {
              color: "#49a6e9",
            },
          }}
          onClick={closeModal}
        >
          <FaTimes />
        </Button>
      </Box>
      <Box>
        <Typography variant="h4">Modal Content</Typography>
      </Box>
    </Box>
  );
}
