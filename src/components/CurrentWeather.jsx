import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const CurrentWeather = () => {
  const data = useSelector((state) => state.data);
  const weather = data.data;

  if (weather) {
    return <div className="Weather">{weather.currently.temperature}</div>;
  } else {
    return null;
  }
};

export default CurrentWeather;
