import React, { useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import items from "../data/menuData.json";
import MenuContent from "./MenuContent";
import Categories from "./Categories";
import MenuHeader from "./MenuHeader";
const allCategories = [
  "all",
  ...new Set(items.menu.map((item) => item.category)),
];

export default function Menu() {
  const [menuItems, setMenuItems] = useState(items.menu);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items.menu);
      return;
    }
    const newItems = items.menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <Box width="90vw">
      <MenuHeader />
      <Categories categories={categories} filterItems={filterItems} />
      <Container sx={{
        padding: "5px"
      }}>
        <Grid container spacing={2} sx={{alignItems: "center"}}>
          {menuItems.map((item) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <MenuContent
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
