import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Box, Grid, Typography } from "@mui/material";

export default function List({ items, removeItem, editItem }) {
  return (
    <Box>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <Grid container key={id} sx={{ my: 1 }}>
            <Grid item xs={10}>
              <Typography variant="h6">{title}</Typography>
            </Grid>
            <Grid item xs={2}>
              <FaEdit onClick={editItem} />
              <FaTrash onClick={removeItem} />
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
