import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  <div className="WeatherInfo">
    <div className="col-8  box--location">
      <h1>{props.data.city} </h1>
      <FormattedDate date={props.data.date} />
    </div>
    <div className="row g-0 d-flex align-items-end mt-4 position-relative">
      <div className="col-sm-6 box--current-weather">
        <h3>{props.data.description}</h3>
        <div className="temperature d-flex align-items-top">
          <p className="temperature"></p>
          <span className="units">
            <a href="/" className="active">
              7 °C {props.data.temperature}
            </a>{" "}
            | <a href="/">°F</a>
          </span>
        </div>
        <div className="d-flex justify-content-start weather-data">
          <span className="d-flex align-items-center weather-data-details">
            <img alt="" src=" icons/humidity.png" className="icon-humidity" />
            <span></span>
            <span> Humidity:{props.data.humidity}%</span>
          </span>
          <span className="d-flex align-items-center weather-data-details" />{" "}
          <img alt="" src=" icons/wind.png" className="icon-windspeed" />
          <span></span>
          <span>Wind Speed:{props.data.wind.speed}km/h</span>
        </div>
      </div>
      <div className="col-6 d-flex">
        <img
          className="icon-current"
          src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png`}
          alt={`Clear Sky`}
          width="160px"
        />
      </div>
    </div>
  </div>;
}
