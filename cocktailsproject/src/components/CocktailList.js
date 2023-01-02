import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../services/Context";
import { Box, Typography } from "@mui/material";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  return loading ? (
    <Loading />
  ) : cocktails.length < 1 ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 30,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto Mono, monospace",
        }}
      >
        No Cocktails matched your search criteria
      </Typography>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Roboto Mono, monospace",
          fontSize: "2.2rem",
        }}
      >
        Cocktails
      </Typography>
      {cocktails.map((cocktail) => {
        return <Cocktail key={cocktail.id} {...cocktail} />;
      })}
    </Box>
  );
};

export default CocktailList;
