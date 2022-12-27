import React from "react";
import { Tooltip, tooltipClasses, styled } from "@mui/material";

const Submenu = ({ children, content }) => {
  const SubTooltip = styled(({ className, ...props }) => (
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
  return <SubTooltip title={content}>{children}</SubTooltip>;
};

export default Submenu;
