import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../redux/reducer";

export const Weather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather(`Chicago, IL, USA`));
  }, [dispatch]);

  const data = useSelector((state) => state.data);
  const location = useSelector((state) => state.location);

  const weather = data.data;

  if (weather) {
    console.log("ChicagoLocate in Weather", weather);
    return (
      <div className="Weather">
        <div className="Location">{location}</div>

        {weather.currently.temperature}
      </div>
    );
  } else {
    return null;
  }
};

export default Weather;
