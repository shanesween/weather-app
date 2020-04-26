import React from "react";
import { useDispatch } from "react-redux";

import { toggleMode } from "../redux/reducer";
import Search from "./Search";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const handleToggle = (e) => {
    dispatch(toggleMode(e.target.id));
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
        <div className="navbar-item">Weather</div>
      </div>
      <div>
        <Search />
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label
              id="F"
              onClick={handleToggle}
              className="btn btn-primary active"
            >
              <input type="radio" name="options" id="option1" />
              °F
            </label>
            <label id="C" onClick={handleToggle} className="btn btn-primary">
              <input type="radio" name="options" id="option2" />
              °C
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
