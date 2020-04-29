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
    <nav
      className="navbar navbar-expand-md navbar-light"
      style={{ backgroundColor: "rgb(17, 46, 90)" }}
    >
      <div className="navbar-brand" style={{ color: "#ffffff" }}>
        Weather
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ color: "#ffffff" }}
      >
        <span class="navbar-toggler-icon" style={{ color: "#ffffff" }}></span>
      </button>

      <div
        class="collapse navbar-collapse "
        style={{ color: "#ffffff" }}
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li className="nav-item">
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
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  );
};

export default MainNavigation;
