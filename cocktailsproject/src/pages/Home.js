import React from "react";
import CocktailList from "../components/CocktailList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <main>
      <SearchBar />
      <CocktailList />
    </main>
  );
};

export default Home;
