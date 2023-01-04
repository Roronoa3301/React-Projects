import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../services/Context";
import { Box, Grid, Typography } from "@mui/material";

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
        my: 15,
      }}
    >
      <Typography
        variant="h4"
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
        my: 15,
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
      <Grid container>
        {cocktails.map((cocktail) => {
          return (
            <Grid item xs={12} sm={6} lg={4} xl={4}>
              <Cocktail key={cocktail.id} {...cocktail} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CocktailList;
