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

  // useEffect(() => {
  //     const linksHeight = linksRef.current.getBoundingClientRect().height;
  //     if (showLinks) {
  //         linksContainerRef.current.style.height = `${linksHeight}px`;
  //     } else {
  //         linksContainerRef.current.style.height = "0px";
  //     }
  // }, [showLinks]);

  return (
    <AppBar
      className="nav-center"
      position="fixed"
      sx={{
        backgroundColor: "white",
      }}
      elevation={5}
    >
      <Container className="nav-header">
        <Toolbar>
          <Box component="img" src={logo} className="logo" />
          <Box className="links-container">
            <Menu>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <MenuItem key={id}>
                    <Link href={url} sx={{ color: "black" }}>
                      {text}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
