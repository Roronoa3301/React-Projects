import React from "react";
import {
  Box,
  Typography,
  Link,
  Card,
  CardContent,
  Icon,
  Button,
} from "@mui/material";
import { useGlobalContext } from "../Context/Context";
import { FaTimes } from "react-icons/fa";
const SidebarContent = ({ product, developer, company }) => {
  const { closeSidebar } = useGlobalContext();
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button onClick={closeSidebar}>
            <FaTimes />
          </Button>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              fontFamily: "Roboto Mono, monospace",
            }}
          >
            Products
          </Typography>
          {product.links.map((link, index) => {
            return (
              <Box key={index}>
                <Icon
                  sx={{
                    color: "#617d98",
                    mr: "1rem",
                    alignSelf: "center",
                  }}
                >
                  {link.icon}
                </Icon>
                <Link
                  href={link.url}
                  underline="none"
                  sx={{
                    display: "block",
                    alignItems: "center",
                    color: "#415569",
                    fontSize: "1.0rem",
                    textTransform: "capitalize",
                    py: "1rem",
                    left: "0",
                    transition: "all 0.3s linear",
                    "&:hover": {
                      background: "#F1F5F8",
                      color: "#243A52",
                    },
                  }}
                >
                  {link.label}
                </Link>
              </Box>
            );
          })}
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              fontFamily: "Roboto Mono, monospace",
            }}
          >
            Developers
          </Typography>
          {developer.links.map((link, index) => {
            return (
              <Box key={index}>
                <Icon
                  sx={{
                    color: "#617d98",
                    mr: "1rem",
                    alignSelf: "center",
                  }}
                >
                  {link.icon}
                </Icon>
                <Link
                  href={link.url}
                  underline="none"
                  sx={{
                    display: "block",
                    alignItems: "center",
                    color: "#415569",
                    fontSize: "1.0rem",
                    textTransform: "capitalize",
                    py: "1rem",
                    left: "0",
                    transition: "all 0.3s linear",
                    "&:hover": {
                      background: "#F1F5F8",
                      color: "#243A52",
                    },
                  }}
                >
                  {link.label}
                </Link>
              </Box>
            );
          })}
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              fontFamily: "Roboto Mono, monospace",
            }}
          >
            Company
          </Typography>
          {company.links.map((link, index) => {
            return (
              <Box key={index}>
                <Icon
                  sx={{
                    color: "#617d98",
                    mr: "1rem",
                    alignSelf: "center",
                  }}
                >
                  {link.icon}
                </Icon>
                <Link
                  href={link.url}
                  underline="none"
                  sx={{
                    display: "block",
                    alignItems: "center",
                    color: "#415569",
                    fontSize: "1.0rem",
                    textTransform: "capitalize",
                    py: "1rem",
                    left: "0",
                    transition: "all 0.3s linear",
                    "&:hover": {
                      background: "#F1F5F8",
                      color: "#243A52",
                    },
                  }}
                >
                  {link.label}
                </Link>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SidebarContent;
