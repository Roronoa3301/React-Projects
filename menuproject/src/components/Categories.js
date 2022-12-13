import React from "react";
import { Box, Button } from "@mui/material";

export default function Categories({ categories, filterItems }) {
  return (
    <Box justifyContent="center" display="flex" alignItems="center">
      {categories.map((category, index) => {
        return (
          <Button
            sx={{
              my: 2,
              mx: 2,
              color: "#c59d5f",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#c59d5f",
              },
            }}
            key={index}
            size="small"
            onClick={() => filterItems(category)}
          >
            {category}
          </Button>
        );
      })}
    </Box>
  );
}
