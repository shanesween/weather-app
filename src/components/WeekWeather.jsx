import React from "react";
import { useSelector } from "react-redux";

import ForecastDayCard from "./ForecastDayCard";

export const WeekWeather = () => {
  const data = useSelector((state) => state.data);
  const weather = data.data;
  const location = useSelector((state) => state.location);
  const date = new Date();
  const now = date.toLocaleTimeString();

  if (weather) {
    const forecastArr = weather.daily.data;

    return (
      <div className="forecast card border my-3">
        <div className="card-header">
          <h5>
            {location[0]}, {location[1]} 7 Day Weather
          </h5>
          <h6>{now}</h6>
        </div>
        <div className="card-body row d-flex justify-content-center">
          {forecastArr.map((day, i) => {
            while (i > 0) {
              return <ForecastDayCard key={i} day={day} />;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default WeekWeather;
