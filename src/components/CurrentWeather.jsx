import React from "react";
import { useSelector } from "react-redux";
import Skycons from "react-skycons";

export const CurrentWeather = () => {
  const data = useSelector((state) => state.data);
  const weather = data.data;
  const mode = useSelector((state) => state.mode);
  const location = useSelector((state) => state.location);

  const date = new Date();
  const now = date.toLocaleTimeString();

  const convertTemp = (F) => {
    return Math.round(((F - 32) * 5) / 9);
  };

  if (weather) {
    const current = weather.currently;
    let icon = current.icon.replace(/-/g, "_").toUpperCase();

    return (
      <>
        <div className="WeatherDisplay container-fluid">
          <div className="flex-column align-items-start">
            <div className="container mb-auto small-12 columns has-sidebar shadow-lg p-3 mb-5 bg-white rounded">
              <div className="current  border my-3   mb-3">
                <div className="card-header">
                  <h1>
                    {location[0]}, {location[1]}
                  </h1>
                  <h6>as of {now}</h6>
                </div>
                <div className="col">
                  {/* row 1 - circle and more data! */}
                  <div className="card-body container row">
                    {/* current circle col */}
                    <div className="col ">
                      <div className="row">
                        <div className="col">
                          <h3 className="display-5">
                            {mode === "F"
                              ? Math.floor(current.temperature) + " °F"
                              : convertTemp(Math.floor(current.temperature)) +
                                " °C"}
                          </h3>
                        </div>
                        <div className="col">
                          <Skycons
                            title={current.summary}
                            color="black"
                            icon={icon}
                            style={{ maxWidth: "60px" }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <h3 className="">{current.summary}</h3>
                      </div>
                      <div className="row">
                        feels like{" "}
                        {mode === "F"
                          ? Math.round(current.apparentTemperature) + "°"
                          : convertTemp(
                              Math.round(current.apparentTemperature)
                            ) + "°"}
                      </div>
                      <div className="row">
                        H{" "}
                        {mode === "F"
                          ? Math.round(weather.daily.data[0].temperatureHigh) +
                            " ° / L " +
                            Math.round(weather.daily.data[0].temperatureLow) +
                            " °"
                          : convertTemp(
                              Math.round(weather.daily.data[0].temperatureHigh)
                            ) +
                            " ° / L " +
                            convertTemp(
                              Math.round(weather.daily.data[0].temperatureLow)
                            ) +
                            " °"}
                      </div>
                      <div className="row">
                        UV Index {current.uvIndex} out of 10
                      </div>
                    </div>
                    <div className="col">
                      <table>
                        <thead>RIGHT NOW</thead>
                        <tr>
                          <th>Wind</th>
                        </tr>

                        <td>
                          <span>🌬{Math.round(current.windSpeed)} mph</span>
                        </td>
                        <tr>
                          <th>Humidity</th>
                        </tr>

                        <td>
                          <span>🥵{Math.round(current.humidity * 100)}%</span>
                        </td>
                        <tr>
                          <th>Dew Point</th>
                        </tr>

                        <td>
                          <span>💧{Math.round(current.dewPoint)}°</span>
                        </td>
                        <tr>
                          <th>Pressure</th>
                        </tr>

                        <td>
                          <span>
                            🤯{(current.pressure * 0.02953).toFixed(2)} in
                          </span>
                        </td>
                        <tr>
                          <th>Visibility</th>
                        </tr>

                        <td>
                          <span>🧐{current.visibility.toFixed(1)} mi</span>
                        </td>
                      </table>
                    </div>
                  </div>
                  <div className="row">{weather.daily.data[0].summary}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default CurrentWeather;
