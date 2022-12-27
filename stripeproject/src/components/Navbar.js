import React, { useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Tooltip,
  tooltipClasses,
  styled,
} from "@mui/material";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import { useGlobalContext } from "../Context/Context";
import Submenu from "./Submenu";
import sublinks from "../data/stripeData";
import ItemCard from "./ItemCard";

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const products = sublinks.products;
  const developers = sublinks.developers;
  const company = sublinks.company;

  const subMenuName = (e) => {
    const pageName = e.target.textContent;
  };

  const handleSubmenu = (e) => {
    closeSubmenu();
  };

  useEffect(() => {
    console.log("sublinks", sublinks);
    console.log("products", products);
  }, []);

  const ModalTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
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
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        />
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {products.map((link, index) => {
            <Submenu
              key={index}
              content={
                <ItemCard label={link.label} icon={link.icon} url={link.url} />
              }
            >
              <Button
                sx={{
                  fontSize: "1.1rem",
                  fontFamily: "Roboto Mono, monospace",
                  color: "white",
                  background: "transparent",
                  borderColor: "transparent",
                  letterSpacing: "1px",
                  width: "10rem",
                  transition: "all 0.3s linear",
                  cursor: "pointer",
                  height: "100%",
                }}
              >
                {link.pageHeader}
              </Button>
            </Submenu>;
          })} */}
          {/* {sublinks.map((link) => {
            link.links.map((newLink, index) => {
              console.log("links", newLink);
              console.log("label", newLink.label);
              console.log("page", newLink.pageHeader);

              <Submenu
                key={index}
                content={
                  <ItemCard
                    label={newLink.label}
                    icon={newLink.icon}
                    url={newLink.url}
                  />
                }
              >
                <Button
                  sx={{
                    fontSize: "1.1rem",
                    fontFamily: "Roboto Mono, monospace",
                    color: "white",
                    background: "transparent",
                    borderColor: "transparent",
                    letterSpacing: "1px",
                    width: "10rem",
                    transition: "all 0.3s linear",
                    cursor: "pointer",
                    height: "100%",
                  }}
                >
                  {newLink.pageHeader}
                </Button>
              </Submenu>;
            });
          })} */}

          {/* <Button
            sx={{
              fontSize: "1.1rem",
              fontFamily: "Roboto Mono, monospace",
              color: "white",
              background: "transparent",
              borderColor: "transparent",
              letterSpacing: "1px",
              width: "10rem",
              transition: "all 0.3s linear",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Developers
          </Button>
          <Button
            sx={{
              fontSize: "1.1rem",
              fontFamily: "Roboto Mono, monospace",
              color: "white",
              background: "transparent",
              borderColor: "transparent",
              letterSpacing: "1px",
              width: "10rem",
              transition: "all 0.3s linear",
              cursor: "pointer",
              height: "100%",
            }}
          >
            Company
          </Button> */}
        </Box>

        <Button
          sx={{
            fontSize: "1rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "0.25rem",
            color: "white",
            background: "black",
            borderColor: "transparent",
            transition: "all 0.3s linear",
            cursor: "pointer",
            "&:hover": {
              background: "#617D98",
            },
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <FaBars />
        </Button>
        <Button
          sx={{
            fontSize: "1rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "0.25rem",
            color: "white",
            background: "black",
            borderColor: "transparent",
            transition: "all 0.3s linear",
            cursor: "pointer",
            "&:hover": {
              background: "#617D98",
            },
            justifyContent: "start",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          Start now
        </Button>
      </Toolbar>
    </AppBar>
  );
}
