import React from "react";
import { Card, CardContent, Link, Icon, Box, Typography } from "@mui/material";

const ItemCard = ({ data, title }) => {
  //   useEffect(() => {
  //     console.log(
  //       "Label",
  //       data.links.map((link) => link.label)
  //     );
  //   }, []);
  return (
    <Card
      sx={{
        width: "auto",
        height: "auto",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "block",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Box>
        {data.links.map((link, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                mx: "1rem",
              }}
            >
              <Icon
                sx={{
                  color: "#617d98",
                  mr: "1rem",
                  alignSelf: "center",
                }}
              >
                {link.icon}
              </Icon>
              <Link
                href={link.url}
                underline="none"
                sx={{
                  display: "block",
                  alignItems: "center",
                  color: "#415569",
                  fontSize: "1.0rem",
                  textTransform: "capitalize",
                  py: "1rem",
                  left: "0",
                  transition: "all 0.3s linear",
                  "&:hover": {
                    background: "#F1F5F8",
                    color: "#243A52",
                  },
                }}
              >
                {link.label}
              </Link>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
