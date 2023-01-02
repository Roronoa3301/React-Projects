import React from "react";
import { useGlobalContext } from "../services/Context";
import { Box, Typography, TextField } from "@mui/material";

const SearchBar = () => {
  const { setSearchTerm } = useGlobalContext();
  return <div>SearchBar</div>;
};

export default SearchBar;
