import React from "react";
import { useGlobalContext } from "../context/Context";
import { Badge, Typography, AppBar, Toolbar } from "@mui/material";

import { FaShoppingBag } from "react-icons/fa";

// const useStyles = styled({
//   badge: {
//     fontSize: "1.2rem",
//     backgroundColor: "#85c6f4",
//   },
// });

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <AppBar
      sx={{
        backgroundColor: "#2680c0",
        p: 1,
        px: { xs: 1, sm: 10, md: 20, lg: 40 },
        margin: "0 auto",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Roboto Mono, monospace",
          }}
        >
          Use Reducer
        </Typography>
        <Badge
          badgeContent={amount <= 0 ? "0" : amount}
          color="secondary"
          sx={{
            color: "white",
            borderRadius: "50%",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <FaShoppingBag
            style={{
              backgroundColor: "transparent",

              borderRadius: "40%",
              color: "#fff",
              height: "30px",
              width: "30px",
            }}
          />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
