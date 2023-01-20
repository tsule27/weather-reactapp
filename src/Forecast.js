import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast-react">
      <div className="line-break"></div>
      <div className="weather-forecast">
        <div className="row gx-0 justify-content-center">
          <div className="col-2">
            <div className="card-body">
              <div className="weather-forecast-date">
                Wednesday
                <br />
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/02d@2x.png"
                    width="42px"
                    className="icon-now"
                    alt="Partly Cloudy"
                  />
                </div>
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">6°</span>{" "}
                  <span className="weather-forecast-temperature-min">2°</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card-body">
              <div className="weather-forecast-date">
                Thursday
                <br />
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    width="42px"
                    className="icon-now"
                    alt="Rain"
                  />
                </div>
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">-3°</span>{" "}
                  <span className="weather-forecast-temperature-min">0°</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card-body">
              <div className="weather-forecast-date">
                Friday
                <br />
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/04d@2x.png"
                    width="42px"
                    className="icon-now"
                    alt="Cloudy"
                  />
                </div>
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">10°</span>{" "}
                  <span className="weather-forecast-temperature-min">2°</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card-body">
              <div className="weather-forecast-date">
                Saturday
                <br />
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/11d@2x.png"
                    width="42px"
                    className="icon-now"
                    alt="Thunderstorm"
                  />
                </div>
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">6°</span>{" "}
                  <span className="weather-forecast-temperature-min">2°</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card-body">
              <div className="weather-forecast-date">
                Sunday
                <br />
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/02d@2x.png"
                    width="42px"
                    className="icon-now"
                    alt="Partly Cloudy"
                  />
                </div>
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">6°</span>{" "}
                  <span className="weather-forecast-temperature-min">3°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
