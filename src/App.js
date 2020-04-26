import React from "react";
import "./App.css";
import MainNavigation from "./components/MainNavigation";
import SecondaryNavigation from "./components/SecondaryNavigation";

const App = () => {
  return (
    <div className="App">
      <MainNavigation />
      <SecondaryNavigation />
    </div>
  );
};

export default App;
