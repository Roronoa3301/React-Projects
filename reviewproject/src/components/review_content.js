import {
  Badge,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function ReviewContent({
  id,
  name,
  job,
  image,
  text,
  prevReview,
  nextReview,
  randomReview,
}) {
  return (
    <Card>
      <CardContent
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          maxWidth: "40vw",
          maxHeight: "60vh",
        }}
      >
        <Badge
          badgeContent={
            <FaQuoteRight
              style={{
                backgroundColor: "#49adef",
                padding: "5px",
                borderRadius: "40%",
                color: "#fff",
                height: "15px",
                width: "15px",
              }}
            />
          }
          overlap="circular"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            component="img"
            src={image}
            width="160px"
            height="160px"
            sx={{
              borderRadius: "50%",
              objectFit: "cover",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "4px -2px 0px 2px #49a6e9",
            }}
          />
        </Badge>
        <Typography
          className="fontRoboto"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#49adef" }}
          className="fontRoboto"
        >
          {job.toUpperCase()}
        </Typography>
        <Typography variant="body1" color="grey" className="fontRoboto">
          {text}
        </Typography>
        <Box>
          <IconButton onClick={prevReview}>
            <FaChevronLeft color="#8bcbf9"></FaChevronLeft>
          </IconButton>
          <IconButton onClick={nextReview}>
            <FaChevronRight color="#8bcbf9"></FaChevronRight>
          </IconButton>
        </Box>
        <Button
          sx={{
            backgroundColor: "#ebf7ff",
            color: "#49adef",
            textTransform: "none",
            py: 0,
            mt: 1,
            mb: 2,
          }}
          onClick={randomReview}
        >
          Surprise Me
        </Button>
      </CardContent>
    </Card>
  );
}
