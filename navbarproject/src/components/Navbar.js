import React, { useState, useEffect, useRef } from "react";
import { links, social } from "../data/data";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import {
  Box,
  Container,
  Button,
  Card,
  CardContent,
  Typography,
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <AppBar
        className="nav-center"
        position="fixed"
        sx={{
          backgroundColor: "white",
        }}
        elevation={1}
      >
        <Container className="nav-header">
          <Toolbar
            sx={{
              alignItems: "center",
            }}
          >
            <Box component="img" src={logo} className="logo" />
            <Box className="links-container" ref={linksContainerRef}>
              <Box
                className="links"
                sx={{
                  px: 8,
                }}
                ref={linksRef}
              >
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <Link key={id} href={url} underline="none">
                      {text}
                    </Link>
                  );
                })}
              </Box>
            </Box>
            <Box
              className="social-icons"
              sx={{
                ml: 20,
              }}
            >
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <Link key={id} href={url} underline="none">
                    {icon}
                  </Link>
                );
              })}
            </Box>
            <Button
              className="nav-toggle"
              sx={{
                fontSize: "1.5rem",
                color: "#49a6e9",
                background: "transparent",
                borderColor: "transparent",
                transition: "all 0.3s linear",
                cursor: "pointer",
                // "&:hover": {
                //   color: "#D5DCE1",
                //   transform: "rotate(90deg)",
                // },
                display: { xs: "block", sm: "none" },
              }}
              onClick={toggleLinks}
            >
              <FaBars />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
