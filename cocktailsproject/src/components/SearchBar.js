import React from "react";
import { useGlobalContext } from "../services/Context";
import { Box, Typography, TextField } from "@mui/material";

const SearchBar = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // width: { xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "60%" },
        borderRadius: "5px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        my: 5,
        p: 2,
        mx: { xs: "10%", sm: "20%", md: "20%", lg: "25%", xl: "25%" },
        color: "fff",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Roboto Mono, monospace",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#476a2e",
        }}
      >
        Search Your Favorite Cocktail
      </Typography>

      <TextField
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "black",
            },
          },
          width: { xs: "90%", sm: "85%", md: "85%", lg: "85%", xl: "85%" },
        }}
        size="small"
      />
    </Box>
  );
};

export default SearchBar;
