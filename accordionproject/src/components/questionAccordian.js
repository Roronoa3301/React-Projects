import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <AiOutlineMinus color="#ca7c96" />
            ) : (
              <AiOutlinePlus color="#ca7c96" />
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight="bold" className=".font" fontSize="1rem">
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="0.8rem" className=".font">{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
