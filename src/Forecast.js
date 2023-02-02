import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="forecast-react">
        <div className="line-break"></div>
        <div className="weather-forecast">
          <div className="row gx-0 justify-content-center">
            <div className="col-2">
              <div className="card-body">
                <ForecastDay data={forecast[0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "106dbabb3d74f0b0a58d9b9o57ec7ta4";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
