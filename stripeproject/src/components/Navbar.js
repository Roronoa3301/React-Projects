import React, { useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Drawer,
  Modal,
  Fade,
} from "@mui/material";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import { useGlobalContext } from "../Context/Context";
import Submenu from "./Submenu";
import { products, developers, company } from "../data/stripeData";
import ItemCard from "./ItemCard";
import SidebarContent from "./SidebarContent";

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu, closeSidebar } =
    useGlobalContext();
  const productsData = products;
  const developersData = developers;
  const companyData = company;

  const subMenuName = (e) => {
    const pageName = e.target.textContent;
  };

  const handleSubmenu = (e) => {
    closeSubmenu();
  };

  useEffect(() => {
    console.log(
      "products",
      products.links.map((link) => link.label)
    );
  }, []);

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
          <Submenu content={<ItemCard data={products} title="Products" />}>
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
              Products
            </Button>
          </Submenu>
          <Submenu content={<ItemCard data={developers} title="Developer" />}>
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
              Developer
            </Button>
          </Submenu>
          <Submenu content={<ItemCard data={company} title="Company" />}>
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
            </Button>
          </Submenu>
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
          onClick={openSidebar}
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
      {/* <Modal
        open={openSidebar}
        onClose={closeSidebar}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        closeAfterTransition
      >
        <Fade in={openSidebar}>
          <SidebarContent
            product={products}
            developer={developers}
            company={company}
          />
        </Fade>
      </Modal> */}
      {/* <Drawer
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          flexShrink: 0,
          // "& .MuiDrawer-paper": {
          //   width: drawerWidth,
          //   boxSizing: "border-box",
          // },
        }}
        variant="persistent"
        anchor="left"
        open={openSidebar}
      >
        <SidebarContent
          product={products}
          developer={developers}
          company={company}
        />
      </Drawer> */}
    </AppBar>
  );
}
