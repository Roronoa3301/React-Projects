import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
  Box,
  Typography,
  CardContent,
} from "@mui/material";
import React from "react";

const birthdayList = ({ people }) => {
  return (
    <List>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <Card elevation={0}>
            <CardContent sx={{p: 0}}>
              <Grid container spacing={11}>
                <Grid item xs={2}>
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
                <Grid item xs={10} alignItems="center" display="flex">
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {name}
                    </Typography>
                    <Typography
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
          //   <Grid container>
          //     <Grid item xs={2}>
          //       <Box component="img" src={image} sx={{width: "75px", height: "75px", objectFit: "cover"}} borderRadius="50%">
          //       </Box>
          //     </Grid>
          //     <Grid item xs={10} display="flex" alignItems="center">
          //         <Typography>
          //             {name} {age}
          //         </Typography>
          //     </Grid>
          //   </Grid>

          // <ListItem>
          //     <ListItemAvatar>
          //         <Avatar>
          //         <img style={{width: 75, height: 75, objectFit: "cover", borderRadius: "50%", boxShadow: "5px 5px 5px 5px #888888"}} src={image} alt={name} />
          //         </Avatar>
          //     </ListItemAvatar>
          //     <ListItemText primary={name} secondary={age + ' years'} />
          // </ListItem>

          // <article key={id} className='person'>
          //     <img src={image} alt={name} />
          //     <div>
          //     <h4>{name}</h4>
          //     <p>{age} years</p>
          //     </div>
          // </article>
        );
      })}
    </List>
  );
};

export default birthdayList;
