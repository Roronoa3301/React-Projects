import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function List({ items, removeItem, editItem }) {
  return (
    <Box>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <Grid
            container
            display="flex"
            key={id}
            sx={{ my: 1 }}
            className="grocery-item"
          >
            <Grid item xs={10}>
              <Typography variant="h6" className="title">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Box display="flex">
                <Button
                  className="edit-btn"
                  sx={{
                    color: "hsl(125, 71%, 66%)",
                  }}
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </Button>
                <Button
                  className="delete-btn"
                  sx={{
                    color: "hsl(360, 71%, 66%)",
                  }}
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </Button>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
