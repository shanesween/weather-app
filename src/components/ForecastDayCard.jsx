import React from "react";
import Skycons from "react-skycons";
import { useSelector } from "react-redux";

export const ForecastDayCard = (props) => {
  const { day } = props;

  const convert = (F) => {
    return Math.round(((F - 32) * 5) / 9);
  };

  const mode = useSelector((state) => state.mode);

  let date = new Date(day.time * 1000).getUTCDay();
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let icon = day.icon.replace(/-/g, "_").toUpperCase();

  return (
    <div className="card">
      <div className=" text-secondary ">
        <time title={new Date(day.time * 1000)}>{week[date]}</time>
        <Skycons
          title={day.summary}
          color="black"
          icon={icon}
          style={{ maxWidth: "20px" }}
        />
        <p className="text-wrap" style={{ width: "9rem" }}>
          {day.summary}{" "}
        </p>
        <h5>
          {mode === "F"
            ? Math.floor(day.temperatureMax) +
              " °F / " +
              Math.floor(day.temperatureMin) +
              " °F"
            : convert(Math.floor(day.temperatureMax)) +
              " °C / " +
              convert(Math.floor(day.temperatureMin)) +
              " °C"}
        </h5>
      </div>
    </div>
  );
};

export default ForecastDayCard;
