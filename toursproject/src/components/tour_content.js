import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";


const Read = ({ desc }) => {
    const text = desc;
    const [readMore, setReadMore] = useState(true); 

    const toggleRead = () => {
        setReadMore(!readMore);
    };
    return (
        <p style={{display: "inline", width: "100%"}}>
      {readMore ? text.slice(0, 200) : text}
      <span
        onClick={toggleRead}
        style={{
          cursor: "pointer",
          color: "#49a6e9",
        }}
      >
        {readMore ? "...Read More" : " Show Less"}
      </span>
    </p>
    );
};

export default function TourContent({ id, image, info, name, price, removeTour }) {

  return (
    <Card
      sx={{
        boxShadow: "5px 5px 5px 5px #888888",
        maxWidth: 700,
        minHeight: 430,
        mb: 3,
      }}
    >
      <CardMedia component="img" height="194" image={image} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            pr: 2,
          }}
        >
          <Typography gutterBottom fontWeight="bold">
            {name}
          </Typography>
          <Typography
            gutterBottom
            fontWeight="bold"
            sx={{
              backgroundColor: "#ebf7ff",
              borderRadius: "5px",
              p: "2px",
              color: "#49adef",
            }}
          >
            {price}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
            <Read desc={info} />
        </Typography>
        <Button
          sx={{
            color: "hsl(360, 67%, 44%)",
            width: "60%",
            textTransform: "none",
            fontWeight: "bold",
            backgroundColor: "white",
            
            marginTop: 2,
            borderColor: "hsl(360, 67%, 44%)",
            "&:hover": {
              backgroundColor: "#CF7095",
            },
          }}
          variant="outlined"
            onClick={() => removeTour(id)}
        >
          Not Interested
        </Button>
      </CardContent>
    </Card>
  );
}
