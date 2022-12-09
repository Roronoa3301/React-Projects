import React, { useState, useEffect } from "react";
import LoadingAnimation from "./components/loading";
import Tours from "./components/tours";
import NoTours from "./components/no_tours";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = "https://course-api.com/react-tours-project";

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <LoadingAnimation />
  ) : tours.length === 0 ? (
    <NoTours fetchTours={fetchTours} />
  ) : (
    <Tours tours={tours} removeTour={removeTour} />
  );
}

export default App;
