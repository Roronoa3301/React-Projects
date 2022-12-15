import React from "react";
import { Container } from "@mui/material";
import PageHeader from "./PageHeader";
import LoremIpsumGenerator from "./LoremIpsumGenerator";

export default function LoremIpsumPage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <PageHeader />
      <LoremIpsumGenerator />
    </Container>
  );
}
