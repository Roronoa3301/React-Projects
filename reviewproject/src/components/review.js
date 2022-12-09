import React, { useState } from "react";
import data from "../data/people.json";
import { Box, Typography, Grid, Divider } from "@mui/material";
import ReviewContent from "./review_content";

export default function Review() {
  const [index, setIndex] = useState(1);
  const [people] = useState(data.reviews);
  const peopleLength = people.length;
  console.log(people);

  const checkNumber = (number) => {
    if (number > peopleLength - 1) {
      return 0;
    }
    if (number < 0) {
      return peopleLength - 1;
    }
    return number;
  };

  const randomReview = () => {
    let random = Math.floor(Math.random() * peopleLength);
    if (random === index) {
      random = index+ 1;
    }
    setIndex(checkNumber(random));
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
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
            component="div"
            fontWeight="bold"
            sx={{
              color: "black",
              display: "inline",
            }}
          >
            <Typography className="fontFamily" variant="h2" component="div" sx={{ display: "inline" }}>
              Our Reviews
            </Typography>
            <Divider
              sx={{
                borderBottomWidth: 5,
                borderBottomColor: "#49adef",
                mx: "40%",
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
            <ReviewContent
              {...people[index]}
              randomReview={randomReview}
              nextReview={nextReview}
              prevReview={prevReview}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
