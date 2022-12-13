import React from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";

export default function MenuContent({ title, price, img, desc }) {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          xl={6}
          sm={12}
          md={6}
          lg={6}
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Box
            display="flex"
            height="150px"
            component="img"
            src={img}
            sx={{
              border: "2px solid #c59d5f",
            }}
          />
        </Grid>
        <Grid item xs={12} xl={6} sm={12} lg={6} md={6}>
          <Box
            justifyContent="space-between"
            display="flex"
            sx={{
              pr: 2,
            }}
          >
            <Typography fontWeight="bold" fontFamily="Roboto Mono">
              {title}
            </Typography>
            <Typography
              fontWeight="bold"
              sx={{
                color: "#c59d5f",
              }}
            >
              ${price}
            </Typography>
          </Box>
          <Divider
            sx={{
              color: "#c59d5f",
              mx: 1,
              borderBottomWidth: 2,
              borderBottomStyle: "dotted",
            }}
          />
          <Typography
            fontSize="0.8rem"
            sx={{
              color: "#707070",
              mt: 2,
            }}
          >
            {desc}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
