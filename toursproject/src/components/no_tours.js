import React from "react";
import {Typography, Button, Grid, Divider } from "@mui/material";

export default function NoTours({ fetchTours }) {
  return (
    <Grid container sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100vw",
        height: "100vh",

    }}
    width="fit-content"
    height="fit-content"
    >
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            display: "inline",
          }}
        >
          No tours left
        </Typography>
        <Divider
          sx={{
            borderBottomWidth: 5,
            borderBottomColor: "#49adef",
            mx: 70,
          }}
        />
      </Grid>
      <Grid item xs={4}>
      <Button
        sx={{
          color: "hsl(360, 67%, 44%)",
          width: "60%",
          textTransform: "none",
          fontWeight: "bold",
          backgroundColor: "white",
          borderColor: "hsl(360, 67%, 44%)",
          "&:hover": {
            backgroundColor: "#CF7095",
          },
        }}
        variant="outlined"
        onClick={fetchTours}
      >
        Refresh
      </Button>
      </Grid>
    </Grid>
  );
}
