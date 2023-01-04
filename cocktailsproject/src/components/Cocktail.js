import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <Card
      sx={{
        my: 5,
        mx: 2,
        boxShadow: 5,
      }}
    >
      <CardMedia sx={{ height: "20rem" }} image={image} title={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: "Roboto Mono, monospace",
            fontSize: "2.0rem",
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            fontFamily: "Roboto Mono, monospace",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          {glass}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Roboto Mono, monospace",
            fontSize: "1.0rem",
            fontWeight: "bold",
          }}
        >
          {info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          component={Link}
          to={`/cocktail/${id}`}
          sx={{
            color: "#fff",
            backgroundColor: "#476a2e",
            transition: "all 0.3s linear",
            "&:hover": {
              backgroundColor: "#d4e6a5",
              color: "#476a2e",
            },
            fontFamily: "Roboto Mono, monospace",
            ml: "1rem",
            mb: "1rem",
            textTransform: "capitalize",
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cocktail;
