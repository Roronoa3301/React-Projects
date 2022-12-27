import React from "react";
import { Card, CardContent, Link, Icon } from "@mui/material";

const ItemCard = ({ label, icon, url }) => {
  return (
    <Card>
      <CardContent>
        <Icon
          sx={{
            color: "#617d98",
            mr: "1rem",
          }}
        >
          {icon}
        </Icon>
        <Link href={url}>{label}</Link>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
