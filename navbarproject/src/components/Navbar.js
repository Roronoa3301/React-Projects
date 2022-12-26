import React, { useState, useEffect } from "react";
import { links, social } from "../data/data";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import { Box, Button, Link, AppBar, Toolbar, Collapse } from "@mui/material";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleResize() {
      const windowSize = getWindowSize();
      const linksWidth = windowSize.innerWidth;
      if (linksWidth > 900) {
        setShowLinks(false);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s linear",
        }}
        className="hamburger"
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
          {/*The Logo*/}
          <Box
            component="img"
            src={logo}
            sx={{
              height: "4.0rem",
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
                color: "#102A42",
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
            <Box>
              {links.map((link) => {
                const { id, url, text } = link;
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
        {/*The Links for Mobile View*/}
        <Collapse orientation="vertical" in={showLinks}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <Link
                key={id}
                href={url}
                underline="none"
                sx={{
                  color: "#34506a",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  letterSpacing: "0.1rem",
                  display: "block",
                  padding: "0.5rem 1rem",
                  transition: "all 0.3s linear",
                  "&:hover": {
                    background: "hsl(205, 86%, 81%)",
                    transition: "all 0.3s linear",
                    color: "#49a6e9",
                    pl: "1.5rem",
                  },
                }}
              >
                {text}
              </Link>
            );
          })}
        </Collapse>
      </AppBar>
    </nav>
  );
}
