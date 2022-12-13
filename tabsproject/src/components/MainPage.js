import React from "react";
import PageHeader from "./PageHeader";
import ExperienceTabs from "./Tabs";
import { Container } from "@mui/material";

export default function MainPage() {
  return (
    <Container
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{
        my: 10,
      }}
    >
      <PageHeader />
      <ExperienceTabs />
    </Container>
  );
}
