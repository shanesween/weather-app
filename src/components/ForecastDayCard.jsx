import React from "react";
import Skycons from "react-skycons";

export const ForecastDayCard = (props) => {
  const { day } = props;

  let date = new Date(day.time * 1000).getUTCDay();
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let icon = day.icon.replace(/-/g, "_").toUpperCase();

  return (
    <div className="card">
      <div className="row eight-cols text-secondary">
        <div className="col">
          <time title={new Date(day.time * 1000)}>{week[date]}</time>
          <Skycons
            title={day.summary}
            color="black"
            icon={icon}
            style={{ maxWidth: "20px" }}
          />
          <p className="text-right">{day.summary} </p>
        </div>
      </div>
    </div>
  );
};

export default ForecastDayCard;
