import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="row g-0 d-flex align-items-end mt-4 position-relative">
      <div className="col-sm-6 box--current-weather">
        <h3>Partly Cloudy</h3>
        <div className="temperature d-flex align-items-top">
          <h4 className="temperature"></h4>
          <span className="units">
            <a href="/" className="active">
              7 °C
            </a>{" "}
            | <a href="/">°F</a>
          </span>
        </div>
        <div className="d-flex justify-content-start weather-data">
          <span className="d-flex align-items-center weather-data-details">
            <img alt="" src=" icons/humidity.png" className="icon-humidity" />
            <span></span>
            <span> Humidity:50% </span>
          </span>
          <span className="d-flex align-items-center weather-data-details" />{" "}
          <img alt="" src=" icons/wind.png" className="icon-windspeed" />
          <span></span>
          <span> Wind Speed:5 km/h</span>
        </div>
      </div>
      <div className="col-6 d-flex">
        <img
          className="icon-current"
          src="https://openweathermap.org/img/wn/02d@2x.png"
          alt="Partly Cloudy"
          width="160px"
        />
      </div>
    </div>
  );
}
