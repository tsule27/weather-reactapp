import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature d-flex align-items-top">
      <h4 className="temperature">{Math.round(props.celsius)}</h4>
      <span className="units">
        <a href="/" className="active">
          °C
        </a>{" "}
        | <a href="/">°F</a>
      </span>
    </div>
  );
}
