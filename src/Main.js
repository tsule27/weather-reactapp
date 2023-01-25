import React, { useState } from "react";
import axios from "axios";
import "./Main.css";
import "./Navigation.css";
import WeatherInfo from "./WeatherInfo";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
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

  if (weatherData.ready) {
    return (
      <>
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
                  />
                </span>
              </div>
            </form>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
      </>
    );
  } else {
    search();
    return "Loading...";
  }
}
