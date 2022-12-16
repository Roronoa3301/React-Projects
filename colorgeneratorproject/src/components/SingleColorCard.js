import React, { useState, useEffect } from "react";
import { Box, CardContent, Typography } from "@mui/material";

export default function SingleColorCard({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <Box
      sx={{
        backgroundColor: `rgb(${bcg})`,
        height: "150px",
        cursor: "pointer",
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: index > 10 ? "#fff" : "#000",
            fontFamily: "Roboto Mono",
          }}
        >
          {weight}%
        </Typography>
        <Typography
          sx={{
            color: index > 10 ? "#fff" : "#000",
            fontFamily: "Roboto Mono",
          }}
        >
          {hexValue}
        </Typography>
        {alert && (
          <Typography
            sx={{
              color: index > 10 ? "#fff" : "#000",
              fontFamily: "Roboto Mono",
            }}
          >
            COPIED TO CLIPBOARD
          </Typography>
        )}
      </CardContent>
    </Box>
  );
}
