import React, { useState } from "react";
import axios from "axios";
import "./Main.css";
import "./Navigation.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "106dbabb3d74f0b0a58d9b9o57ec7ta4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  function currentLocation(position) {
    let apiKey = "106dbabb3d74f0b0a58d9b9o57ec7ta4";
    let lat = position.coordinates.latitude;
    let lon = position.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="row g-0  ">
        <div className="search-position mb-3">
          <form onSubmit={handleSubmit}>
            <div className="search-bar">
              <div className="col-6 searching">
                <input
                  type="text"
                  placeholder="Enter location"
                  autocomplete="off"
                  className="form-control "
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <span className="col-6 search-buttons">
                <input type="submit" className="btn 1" value=" 🔍 " />
                <input
                  type="submit"
                  className="btn btn-light-2"
                  value=" 📍"
                  onClick={getLocation}
                />
              </span>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
