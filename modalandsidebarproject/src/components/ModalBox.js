import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Modal, Fade } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/ContextData";

export default function ModalBox() {
  const { closeModal, openModal } = useGlobalContext();
  const [modalWidth, setModalWidth] = useState(window.innerWidth);

  function setWindowWidth() {
    setModalWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);

    return () => {
      window.removeEventListener("resize", setWindowWidth);
    };
  }, []);

  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      closeAfterTransition
    >
      <Fade in={openModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: modalWidth > 768 ? "35%" : "70%",
            height: "20vh",
            bgcolor: "background.paper",
            borderRadius: "0.5rem",
            boxShadow: "0 0px 0px rgba(0, 0, 0, 0.0)",
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              ml: -50,
            }}
          >
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
              onClick={closeModal}
            >
              <FaTimes />
            </Button>
          </Box>

          <Typography
            variant={modalWidth > 768 ? "h4" : "h5"}
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#102a42",
              fontFamily: "Roboto Mono, monospace",
            }}
          >
            Modal Content
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
