import React from "react";
import "./Weather.css";
import Navigation from "./Navigation";
import Main from "./Main";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <Navigation />
              <Main />
              <Forecast />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
