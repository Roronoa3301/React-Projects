import {
  Card,
  List,
  Avatar,
  Grid,
  Box,
  Typography,
  CardContent,
} from "@mui/material";
import React from "react";

const birthdayList = ({ people }) => {
  return (
    <List sx={{p: 1, display: "flex", flexDirection: "column"}}>
      {people.map((person) => {
        const { name, age, image } = person;
        return (
          <Card elevation={0}>
            <CardContent sx={{p: 0}}>
              <Grid container>
                <Grid item xs={2} sx={{
                  paddingLeft: "15px",
                }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={image}
                    sx={{
                      width: 80,
                      height: 80,
                      boxShadow: "0 5px 10px grey",
                    }}
                  />
                </Grid>
                <Grid item xs={10} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                  <Box>
                    <Typography variant="h6" className="fontsRobotoMono">
                      {name}
                    </Typography>
                    <Typography
                      className="fontsRobotoMono"
                      variant="subtitle1"
                      sx={{
                        color: "#707070",
                      }}
                    >
                      {age} years
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
    </List>
  );
};

export default birthdayList;
