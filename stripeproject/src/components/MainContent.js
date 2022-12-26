import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import PhoneAD from "../assets/phone.svg";

export default function MainContent() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container columnSpacing={5}>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          sx={{
            pt: "10rem",
            pl: "5rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "#102a42",
              letterSpacing: "1px",
              fontFamily: "Roboto Mono, monospace",
            }}
          >
            Payments infrastructure for the internet
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "#637d97",
              letterSpacing: "1px",
              fontFamily: "Roboto Mono, monospace",
            }}
          >
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </Typography>
          <Button
            sx={{
              fontSize: "1rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "0.25rem",
              color: "white",
              background: "black",
              borderColor: "transparent",
              transition: "all 0.3s linear",
              cursor: "pointer",
              "&:hover": {
                background: "#617D98",
              },
            }}
          >
            Start now
          </Button>
        </Grid>
        <Grid item xs="none" sm="none" md={4} lg={4} xl={4}>
          <Box component="img" src={PhoneAD} />
        </Grid>
      </Grid>
    </Box>
  );
}
