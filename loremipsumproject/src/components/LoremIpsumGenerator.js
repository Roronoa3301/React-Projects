import React, { useState } from "react";
import { Typography, TextField, Button, Container, Box } from "@mui/material";
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
    <Container
      maxWidth="md"
      sx={{
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontFamily: "Roboto Mono",
            fontSize: "1.25rem",
          }}
        >
          Paragraphs:
        </Typography>
        <TextField
          value={count}
          type={"number"}
          onChange={(e) => setCount(e.target.value)}
          size="small"
          sx={{
            px: 2,
            fontFamily: "Roboto Mono",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            padding: "0.25rem 0.5rem",
            width: "4rem",
            borderRadius: "0.25rem",
            border: "none",
            margin: "0 0.5rem",
            fontSize: "1.25rem",
          }}
        ></TextField>
        <Button
          onClick={handleSubmit}
          sx={{
            color: "black",
            padding: "0.375rem 0.75rem",
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
          Generate
        </Button>
      </Box>
      <Box
        justifyContent="center"
        display="flex"
        alignItems="center"
        flexDirection="column"
        py={3}
      >
        {text.map((item, index) => {
          return (
            <Typography
              key={index}
              sx={{
                fontFamily: "Roboto Mono",
                fontSize: "0.95rem",
                color: "#798ea0",
                py: 2,
              }}
              gutterBottom
            >
              {item}
            </Typography>
          );
        })}
      </Box>
    </Container>
  );
}
