import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { FaQuoteRight } from "react-icons/fa";

export default function SliderContent({ id, name, title, image, quote }) {
  return (
    <Container
      key={id}
      maxWidth="lg"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        p: 4,
      }}
    >
      <Box
        component="img"
        src={image}
        height="150px"
        width="150px"
        sx={{
          objectFit: "cover",
          borderRadius: "50%",
          border: "4px solid #bcccdc",
          boxShadow: "0px 5px 15px #bcccdc",
        }}
      />
      <Typography
        mt={1}
        textAlign="center"
        fontWeight="bold"
        fontSize="1.3rem"
        color="#ba5d2c"
        fontFamily="Roboto Mono"
        gutterBottom
      >
        {name}
      </Typography>
      <Typography
        textAlign="center"
        fontSize="1.0rem"
        color="#734d67"
        fontFamily="Roboto Mono"
        mb={4}
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        textAlign="center"
        fontSize="0.9rem"
        color="#617d98"
        fontFamily="Roboto Mono"
        marginBottom={2}
      >
        {quote}
      </Typography>
      <FaQuoteRight className="quoteIcon" />
    </Container>
  );
}
