import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function QuestionAccordian({ question, answer }) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        elevation={2}
        sx={{
          mb: 2,
          alignItems: "center",
          justifyContent: "center",
          p: 1.5,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <Box className="iconBox">
                <AiOutlineMinus color="#b4345c" />
              </Box>
            ) : (
              <Box className="iconBox">
                <AiOutlinePlus color="#b4345c" opacity="1.0" />
              </Box>
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography fontWeight="bold" className="fontsRobotoMono" fontSize="1rem">
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="0.8rem" className=".font">
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
