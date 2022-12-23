import React from "react";
import { Container, Box, Button } from "@mui/material";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import ModalBox from "./ModalBox";
import { keyframes } from "@mui/system";
import { useGlobalContext } from "../Context/ContextData";

const bounce = keyframes`
0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

export default function Home() {
  const { openSidebar, openModal, isSidebarOpen, isModalOpen, modalDisplay } =
    useGlobalContext();

  return (
    <Container maxWidth="xl" display="flex">
      {/*The Sidebar Button*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: "1.5rem",
          transition: "all 0.3s linear",
        }}
      >
        {isSidebarOpen ? (
          <Sidebar />
        ) : (
          <Button
            sx={{
              fontSize: "2.0rem",
              color: "#49a6e9",
              background: "transparent",
              borderColor: "transparent",
              cursor: "pointer",
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "block",
              },
              animation: `${bounce} 2s ease-in-out infinite`,
            }}
            onClick={openSidebar}
          >
            <FaBars />
          </Button>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isModalOpen ? (
          <ModalBox />
        ) : modalDisplay && isSidebarOpen ? (
          <></>
        ) : (
          <Button
            sx={{
              textTransform: "uppercase",
              background: "black",
              color: "white",
              padding: "0.375rem 0.75rem",
              letterSpacing: "0.1rem",
              display: "inline-block",
              transition: "all 0.3s linear",
              fontSize: "0.875rem",
              border: "2px solid black",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
              borderadius: "0.25rem",
              my: "15rem",
              "&:hover": {
                color: "black",
                background: "transparent",
              },
            }}
            onClick={openModal}
          >
            Show Modal
          </Button>
        )}
      </Box>
    </Container>
  );
}
