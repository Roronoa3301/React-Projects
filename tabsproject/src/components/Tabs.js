import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Box, Grid, Button, Tab, Tabs, Typography, Chip } from "@mui/material";
import LoadingAnimation from "./Loading";

const url = "https://course-api.com/react-tabs-project";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

export default function ExperienceTabs() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    console.log(newJobs);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return loading ? (
    <LoadingAnimation />
  ) : (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Tabs
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2caeba",
              },
            }}
            sx={{
              ".MuiTabs-indicator": {
                left: 0,
              },
            }}
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
          >
            {jobs.map((job, index) => {
              return (
                <Tab
                  key={index}
                  label={job.company}
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "1.2rem",
                    color: "black",
                    "&:focus": {
                      color: "#2caeba",
                    },
                  }}
                />
              );
            })}
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          {jobs.map((job, index) => {
            const { id, dates, duties, title, company } = job;
            return (
              <TabPanel value={value} index={index} key={id}>
                <Typography variant="h5">{title}</Typography>
                <Chip
                  label={company}
                  sx={{
                    borderRadius: "10%",
                    color: "#627d98",
                    fontWeight: "bold",
                    backgroundColor: "#dae2ec",
                    mt: 2,
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    color: "#617d98",
                    mb: 2,
                  }}
                >
                  {dates}
                </Typography>

                {duties.map((duty, index) => {
                  return (
                    <Grid
                      container
                      key={index}
                      justifyContent="start"
                      display="flex"
                    >
                      <Grid
                        item
                        lg={1}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                      >
                        <FaAngleDoubleRight className="job-icon" />
                      </Grid>
                      <Grid item lg={11}>
                        <Typography>{duty}</Typography>
                      </Grid>
                    </Grid>
                    // <div key={index} className="job-desc">
                    //   <FaAngleDoubleRight className="job-icon" />
                    //   <p>{duty}</p>
                    // </div>
                  );
                })}
              </TabPanel>
            );
          })}
        </Grid>
      </Grid>
      <Box justifyContent="center" alignItems="center" display="flex" pt={2}>
        <Button
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            backgroundColor: "#2caeba",
            py: 0.5,
            px: 6,
            color: "#bff8fd",
            "&:hover": {
              backgroundColor: "#88ebf2",
              color: "hsl(185, 84%, 25%)",
            },
          }}
        >
          More Info
        </Button>
      </Box>
    </Box>
  );
}
