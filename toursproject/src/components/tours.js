import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import TourContent from "./tour_content";

export default function Tours({ tours, removeTour }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: "black",
              display: "inline",
            }}
          >
            <Typography variant="h2" sx={{ display: "inline" }}>
              Our Tours
            </Typography>
            <Divider
              sx={{
                borderBottomWidth: 5,
                borderBottomColor: "#49adef",
                mx: 75,
              }}
            />
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ alignItems: "center" }}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              maxHeight: "60vh",
              maxWidth: "40vw",
              margin: "auto",
            }}
          >
            {tours.map((tour) => {
              return (
                <TourContent
                  key={tour.id}
                  {...tour}
                  removeTour={removeTour}
                ></TourContent>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
