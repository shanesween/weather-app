import React from "react";
import Skycons from "react-skycons";
import { useSelector } from "react-redux";

export const ForecastHourTable = (props) => {
  const { hour } = props;

  const convert = (F) => {
    return Math.round(((F - 32) * 5) / 9);
  };

  const mode = useSelector((state) => state.mode);

  let hours = new Date(hour.time * 1000).toLocaleTimeString([], {
    timeStyle: "short",
  });
  let date = new Date(hour.time * 1000).getDay();
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let icon = hour.icon.replace(/-/g, "_").toUpperCase();
  return (
    <tr>
      <td>
        <time title={new Date(hour.time * 100)}>{hours}</time>
        <h6>{week[date]}</h6>
      </td>
      <td>
        <span>
          <h4>{hour.summary}</h4>
          <Skycons
            title={hour.summary}
            color="black"
            icon={icon}
            style={{ maxWidth: "60px" }}
          />
        </span>
      </td>
      <td>
        <h6>
          {mode === "F"
            ? Math.round(hour.temperature) + " °F"
            : convert(Math.round(hour.temperature)) + " °C"}
        </h6>
      </td>
      <td>
        <h6>
          {mode === "F"
            ? Math.round(hour.apparentTemperature) + " °F"
            : convert(Math.round(hour.apparentTemperature)) + " °C"}
        </h6>
      </td>
      <td>
        <h6>{Math.round(hour.precipProbability)}%</h6>
      </td>
      <td>
        <h6>{Math.round(hour.humidity * 100)}%</h6>
      </td>
      <td>
        <h6>{Math.round(hour.windGust)} mph</h6>
      </td>
    </tr>
  );
};

export default ForecastHourTable;
