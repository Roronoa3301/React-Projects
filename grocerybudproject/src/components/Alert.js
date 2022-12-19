import React, { useEffect } from "react";
import { Typography } from "@mui/material";

export default function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <Typography className={`alert alert-${type}`}>{msg}</Typography>;
}
