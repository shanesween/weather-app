import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../redux/reducer";

import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export const WeatherDisplay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather(`Chicago, IL, USA`));
  }, [dispatch]);

  const data = useSelector((state) => state.data);
  const weather = data.data;

  const location = useSelector((state) => state.location);

  if (weather) {
    return (
      <div className="WeatherDisplay container-fluid">
        <h1>{location}</h1>
        <div className="col">
          <div className="row-sm-4">
            <CurrentWeather />
          </div>
          <div className="row-sm-8">
            <Forecast />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="alert alert-primary" role="alert">
        <i className="fa fa-spinner fa-spin"></i>
      </div>
    );
  }
};

export default WeatherDisplay;
