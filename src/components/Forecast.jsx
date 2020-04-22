import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ForecastDayCard from "./ForecastDayCard";

export const Forecast = () => {
  const data = useSelector((state) => state.data);
  const weather = data.data;

  const forecastArr = weather.daily.data;

  if (forecastArr) {
    return (
      <div className="forecast card border my-3">
        <div className="card-header">
          <h4>Days to come...</h4>
        </div>
        <div className="card-body">
          {forecastArr.map((day, i) => {
            return <ForecastDayCard key={i} day={day} />;
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Forecast;
