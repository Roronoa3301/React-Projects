import React from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import questionData from "../data/questionData.json";
import QuestionAccordian from "./questionAccordian";

export default function QuestionCard() {
    const data = questionData.questions;
    console.log(data);
  return (
    <Box className="mainBox">
      <Grid container spacing={4} sx={{
        padding: "2rem",
      }}>
        <Grid
          item
          xs={4}
          
        >
          <Typography fontSize="1.5rem" className="fontsRobotoMono" fontWeight="bold">
            Questions and Answers About Login
          </Typography>
        </Grid>
        <Grid
          item
          xs={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
            {data.map((topic, index) => {
            return (
              <QuestionAccordian question={topic.question} answer={topic.answer} key={index} />
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
