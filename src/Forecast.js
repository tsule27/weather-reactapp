import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "106dbabb3d74f0b0a58d9b9o57ec7ta4";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
                <WeatherIcon />
              </div>
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">6°</span>{" "}
                <span className="weather-forecast-temperature-min">2°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
