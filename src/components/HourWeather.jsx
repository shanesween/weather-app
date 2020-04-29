import React from "react";
import { useSelector } from "react-redux";
import ForecastHourTable from "./ForecastHourTable";

export const HourWeather = () => {
  const data = useSelector((state) => state.data);
  const weather = data.data;
  const location = useSelector((state) => state.location);
  const date = new Date();
  const now = date.toLocaleTimeString();

  if (weather) {
    const hourlyArr = weather.hourly.data;
    return (
      <>
        <div className="container shadow-lg p-3 mb-5 bg-white rounded row-sm-4">
          <div className="forecast card border my-3">
            <div className="card-header">
              <h3>
                {location[0]}, {location[1]} Hourly Weather
              </h3>
              <h6>{now}</h6>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">TIME</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">TEMP</th>
                  <th scope="col">FEELS</th>
                  <th scope="col">PRECIP</th>
                  <th scope="col">HUMIDITY</th>
                  <th scope="col">WIND</th>
                </tr>
              </thead>
              <tbody>
                {hourlyArr.map((hour, i) => {
                  while (i > 0) {
                    return <ForecastHourTable key={i} hour={hour} />;
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};
export default HourWeather;
