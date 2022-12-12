import React, { useState } from "react";
import birthdayData from "../data/basic_data.json";
import List from "./list";
import { Button, Grid, Box, Typography } from "@mui/material";

export default function BirthdayReminder() {
  const [people, setPeople] = useState(birthdayData.birthdays);
  return (
    <Box
      sx={{
        p: 5,
        maxWidth: "60vh",
        
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px 5px #888888",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            className="fontsRobotoMono"
            variant="h4"
            sx={{ textAlign: "start" }}
          >
            {people.length} birthdays today
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{alignItems: "center", justifyContent: "center"}}>
          <List people={people} />
        </Grid>
        <Grid item xs={12}>
          {people.length === 0 ? <Button
          className="fontsRobotoMono"
            sx={{
              color: "white",
              width: "100%",
              textTransform: "none",
              fontSize: "1.2rem",
              backgroundColor: "#f28ab2",
              "&:hover": {
                backgroundColor: "#900C3F",
              },
            }}
            variant="contained"
            onClick={() => setPeople([...birthdayData.birthdays])}
          >
            Refresh
          </Button> :
          <Button
          className="fontsRobotoMono"
            sx={{
              color: "white",
              width: "100%",
              textTransform: "none",
              fontSize: "1.2rem",
              backgroundColor: "#f28ab2",
              "&:hover": {
                backgroundColor: "#900C3F",
              },
            }}
            variant="contained"
            onClick={() => setPeople([])}
          >
            Clear All
          </Button>}
        </Grid>
      </Grid>
    </Box>
    // <div style={{ justifyContent: "center", height: "100vh", display: "flex" }}>
    //   <Box
    //     sx={{
    //       p: 3,
    //       minWidth: 450,
    //       backgroundColor: "white",
    //       borderRadius: "10px",
    //       boxShadow: "5px 5px 5px 5px #888888",
    //     }}
    //   >
    //     <List people={people} />
    //     <Button
    //       sx={{
    //         color: "pink",
    //         width: "100%",
    //         textTransform: "none",
    //         fontWeight: "bold",
    //         fontSize: "1.2rem",
    //         backgroundColor: "#900C3F",
    //         "&:hover": {
    //           backgroundColor: "#f28ab2",
    //         },
    //       }}
    //       variant="contained"
    //       onClick={() => setPeople([])}
    //     >
    //       Clear All
    //     </Button>
    //   </Box>
    // </div>
  );
}
