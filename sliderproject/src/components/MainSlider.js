import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Container } from "@mui/material";
import PageHeader from "./PageHeader";
import Reviews from "../data/reviewData.json";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import SliderContent from "./SliderContent";

export default function MainSlider() {
  const [reviews] = useState(Reviews);
  const people = reviews.people;
  return (
    <>
      <PageHeader />
      <Container
        maxWidth="md"
        maxHeight="50vh"
        display="flex"
        alignItems="center"
      >
        <Carousel
          indicatorIconButtonProps={{
            style: {
              color: "#ba5d2c",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: "#324d67",
            },
          }}
          navButtonsProps={{
            style: {
              backgroundColor: "#617d98",
              borderRadius: 5,
            },
          }}
          navButtonsWrapperProps={{
            // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
              bottom: "0",
              top: "unset",
            },
          }}
          NextIcon={<FiChevronRight />}
          PrevIcon={<FiChevronLeft />}
          animation="slide"
          navButtonsAlwaysVisible={true}
        >
          {people.map((person) => {
            return <SliderContent {...person} />;
          })}
        </Carousel>
      </Container>
    </>
  );
}
