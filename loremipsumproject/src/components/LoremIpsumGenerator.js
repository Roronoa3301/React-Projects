import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import data from "../data/loremIpsumData.json";

export default function LoremIpsumGenerator() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.text.slice(0, amount));
  };
  return (
    <Box
      sx={{
        width: "lg",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          display: "flex",
          padding: 0,
        }}
      >
        <Grid item xs={4} md={3} lg={3}>
          <Typography>Paragraphs:</Typography>
        </Grid>
        <Grid item xs={4} md={3} lg={3}>
          <TextField
            value={count}
            onChange={(e) => setCount(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={4} md={3} lg={3}>
          <Button onClick={handleSubmit}>Generate</Button>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          {text.map((item, index) => {
            return <Typography key={index}>{item}</Typography>;
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
