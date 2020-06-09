import React, { useEffect, useState } from "react";
import { geolocated } from "react-geolocated";
import HourWeather from "./HourWeather";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/reducer";
import CurrentWeather from "./CurrentWeather";
import WeekWeather from "./WeekWeather";

const SecondaryNavigation = ({ coords }) => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    if (coords !== null) {
      const { latitude, longitude } = coords;

      setLat(latitude);
      setLng(longitude);
      if (lat !== 0) {
        dispatch(fetchWeather(lat, lng, null));
      }
    }
  }, [coords, lat, dispatch, lng]);

  return (
    <>
      <ul
        className="nav nav-pills mb-3 justify-content-center"
        id="pills-tab"
        role="tablist"
        style={{ backgroundColor: "rgb(216, 227, 231)" }}
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-current-tab"
            data-toggle="pill"
            href="#pills-current"
            role="tab"
            aria-controls="pills-current"
            aria-selected="true"
          >
            Today
          </a>
        </li>
        <li className="nav-item ">
          <a
            className="nav-link"
            id="pills-hourly-tab"
            data-toggle="pill"
            href="#pills-hourly"
            role="tab"
            aria-controls="pills-hourly"
            aria-selected="true"
          >
            Hourly
          </a>
        </li>
        <li className="nav-item ">
          <a
            className="nav-link"
            id="pills-weekly-tab"
            data-toggle="pill"
            href="#pills-weekly"
            role="tab"
            aria-controls="pills-weekly"
            aria-selected="true"
          >
            Weekly
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#more-links"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More Forecasts
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="https://weather.com/">
              Weather Channel
            </a>
            <a className="dropdown-item" href="https://www.wunderground.com/">
              Weather Underground
            </a>
            <a
              className="dropdown-item"
              href="https://www.buymeacoffee.com/shanesween"
            >
              Buy Shane a beer!
            </a>
          </div>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-current"
          role="tabpanel"
          aria-labelledby="pills-current-tab"
        >
          <CurrentWeather />
        </div>
        <div
          className="tab-pane fade"
          id="pills-hourly"
          role="tabpanel"
          aria-labelledby="pills-hourly-tab"
        >
          <HourWeather />
        </div>
        <div
          className="tab-pane fade"
          id="pills-weekly"
          role="tabpanel"
          aria-labelledby="pills-weekly-tab"
        >
          <WeekWeather />
        </div>
      </div>
    </>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(SecondaryNavigation);
