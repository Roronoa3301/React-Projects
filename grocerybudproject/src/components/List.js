import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Box, Typography, Button } from "@mui/material";

export default function List({ title, removeItem, editItem }) {
  return (
    <Box
      justifyContent="space-between"
      display="flex"
      alignItems="center"
      maxWidth="sm"
    >
      <Typography
        variant="h6"
        className="title"
        sx={{
          fontFamily: "Roboto Mono",
        }}
      >
        {title}
      </Typography>
      <Box>
        <Button
          className="edit-btn"
          sx={{
            color: "hsl(125, 71%, 66%)",
          }}
          onClick={editItem}
        >
          <FaEdit />
        </Button>
        <Button
          className="delete-btn"
          sx={{
            color: "hsl(360, 71%, 66%)",
          }}
          onClick={removeItem}
        >
          <FaTrash />
        </Button>
      </Box>
    </Box>
  );
}
