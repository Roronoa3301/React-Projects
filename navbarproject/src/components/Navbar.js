import React, { useState, useEffect, useRef } from "react";
import { links, social } from "../data/data";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import {
  Box,
  Button,
  Link,
  AppBar,
  Toolbar,
  SwipeableDrawer,
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
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem",
          }}
        >
          {/*The Logo*/}
          <Box
            component="img"
            src={logo}
            sx={{
              height: "2.5rem",
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          />
          {/*The Toggle Button*/}
          <Button
            sx={{
              fontSize: "1.5rem",
              color: "#49a6e9",
              background: "transparent",
              borderColor: "transparent",
              transition: "all 0.3s linear",
              cursor: "pointer",
              "&:hover": {
                color: "#D5DCE1",
                transform: "rotate(90deg)",
              },
              alignItems: "end",
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
            onClick={toggleLinks}
          >
            <FaBars />
          </Button>
          {/*The Links*/}
          <Box
            ref={linksContainerRef}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              overflow: "hidden",
              transition: "all 0.3s linear",
              height: "auto !important",
              justifyContent: "center",
            }}
          >
            <Box className="links" ref={linksRef}>
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
          {/*The Social Icons*/}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
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
                    transition: "all 0.3s linear",
                    "&:hover": { color: "hsl(205, 90%, 76%)" },
                  }}
                >
                  {icon}
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
