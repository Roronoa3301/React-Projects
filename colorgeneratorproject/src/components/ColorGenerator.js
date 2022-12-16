import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import Values from "values.js";
import SingleColorCard from "./SingleColorCard";

export default function ColorGenerator() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#7515D6").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        sx={{ py: 2 }}
      >
        <Typography
          fontWeight="bold"
          fontSize="1.4rem"
          color="#06325b"
          fontFamily="Roboto Mono"
        >
          Color Generator
        </Typography>
        <TextField
          value={color}
          onChange={(e) => setColor(e.target.value)}
          size="small"
          sx={{
            mx: 1,
            fontFamily: "Roboto Mono",
            border: error ? "3px solid red" : null,
            borderRadius: "0.25rem",
            fontSize: "1.25rem",
            color: "transparent",
            width: "160px",
          }}
          placeholder="#7515D6"
        />
        <Button
          onClick={handleSubmit}
          sx={{
            color: "white",

            letterSpacing: "1px",
            display: "inline-block",
            fontSize: "0.875rem",
            border: "2px solid hsl(205, 78%, 60%)",
            cursor: "pointer",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
            borderRadius: "0.25rem",
            fontFamily: "Roboto Mono",
            backgroundColor: "#49a6e9",
            "&:hover": {
              color: "white",
              backgroundColor: "#06325B",
            },
          }}
        >
          Submit
        </Button>
      </Box>
      <Grid container>
        {list.map((color, index) => {
          return (
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
              <SingleColorCard
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
