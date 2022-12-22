import React from "react";
import { Container, Box, Link, Button } from "@mui/material";
import { links, social } from "../componentData/data";
import Logo from "../logo.svg";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/ContextData";

export default function Sidebar() {
  const { closeSidebar } = useGlobalContext();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={Logo}
          sx={{
            height: "2.5rem",
            display: "block",
          }}
        />
        <Button
          sx={{
            fontSize: "1.75rem",
            background: "transparent",
            borderColor: "transparent",
            color: "#34506a",
            cursor: "pointer",
            transition: "all 0.3s linear",
            "&:hover": {
              color: "#49a6e9",
            },
          }}
          onClick={closeSidebar}
        >
          <FaTimes />
        </Button>
      </Box>
      <Box>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <Link
              key={id}
              href={url}
              underline="none"
              sx={{
                display: "inline",
                justifyContent: "center",
                color: "#34506a",
                fontSize: "1rem",
                textTransform: "capitalize",
                letterSpacing: "0.1rem",
                padding: "0",
                margin: "0.5rem 1rem",
                transition: "all 0.3s linear",
                "&:hover": {
                  padding: "0",
                  background: "transparent",
                  color: "#49a6e9",
                },
              }}
            >
              {icon}
              {text}
            </Link>
          );
        })}
      </Box>
      <Box>
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <Link
              key={id}
              href={url}
              underline="none"
              sx={{
                margin: "0 0.5rem",
                color: "#49a6e9",
                transition: "all 0.3s linear",
                "&:hover": { color: "#8BCBF9" },
              }}
            >
              {icon}
            </Link>
          );
        })}
      </Box>
    </Container>
  );
}
