import React from "react";
import { Container } from "@mui/material";
import Alert from "./Alert";
import List from "./List";

export default function GroceryBudPage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Alert />
      <List />
    </Container>
  );
}
