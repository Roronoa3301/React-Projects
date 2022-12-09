import React, { useState } from "react";
import birthdayData from "./data/basic_data";
import List from "./components/list";
import { Button, Grid, Box, Container, Typography, Paper } from "@mui/material";
import { width } from "@mui/system";

function App() {
  const [people, setPeople] = useState(birthdayData);
  return (
    <div style={{ justifyContent: "center", height: "100vh", display: "flex" }}>
      <Box
        sx={{
          p: 3,
          minWidth: 450,
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px 5px #888888",
        }}
      >
        <List people={people} />
        <Button
          sx={{
            color: "pink",
            width: "100%",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "1.2rem",
            backgroundColor: "#900C3F",
            "&:hover": {
              backgroundColor: "#f28ab2",
            },
          }}
          variant="contained"
          onClick={() => setPeople([])}
        >
          Clear All
        </Button>
      </Box>
    </div>
  );
}

export default App;
