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
      <Grid container spacing={4}>
        <Grid
          item
          xs={4}
          justifyContent="center"
          alignItems="start"
          display="flex"
        >
          <Typography fontSize="1.5rem" className=".font">
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
