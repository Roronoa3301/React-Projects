import React from "react";
import { Container, Box, Link, Button, AppBar, Toolbar } from "@mui/material";
import { links, social } from "../componentData/data";
import Logo from "../logo.svg";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/ContextData";

export default function Sidebar() {
  const { closeSidebar } = useGlobalContext();

  return (
    <Container
      maxWidth="xs"
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,

        transition: "all 0.3s linear",
        transform: "translate(0)",
        background: "white",
        height: "100%",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "0 0px 0px rgba(0, 0, 0, 0.0)",
          transition: "all 0.3s linear",
        }}
      >
        <Toolbar
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem",
            transition: "all 0.3s linear",
          }}
        >
          <Box
            component="img"
            src={Logo}
            sx={{
              height: "2.5rem",
              display: "flex",
              justifyContent: "start",
            }}
          />
          <Button
            sx={{
              fontSize: "1.75rem",
              background: "transparent",
              borderColor: "transparent",
              color: "#bb2525",
              cursor: "pointer",
              transition: "all 0.3s linear",
              "&:hover": {
                color: "#ec7570",
              },
            }}
            onClick={closeSidebar}
          >
            <FaTimes />
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          mt: "5rem",
        }}
      >
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <Link
              key={id}
              href={url}
              underline="none"
              sx={{
                display: "block",
                alignItems: "center",
                color: "#415569",
                fontSize: "1.5rem",
                textTransform: "capitalize",
                letterSpacing: "0.1rem",
                py: "1rem",
                left: "0",
                transition: "all 0.3s linear",
                "&:hover": {
                  background: "#F1F5F8",
                  color: "#243A52",
                },
              }}
            >
              {icon}
              {text}
            </Link>
          );
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "17rem",
        }}
      >
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
                fontSize: "1.5rem",
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
