import React from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  return (
    <div className="App">
      <Search />
      <WeatherDisplay />
    </div>
  );
};

export default App;
