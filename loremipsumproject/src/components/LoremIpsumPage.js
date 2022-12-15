import React from "react";
import { Box } from "@mui/material";
import PageHeader from "./PageHeader";
import LoremIpsumGenerator from "./LoremIpsumGenerator";

export default function LoremIpsumPage() {
  return (
    <>
      <PageHeader />
      <LoremIpsumGenerator />
    </>
  );
}
