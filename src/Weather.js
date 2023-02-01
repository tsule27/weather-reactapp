import React from "react";
import "./Weather.css";

import Main from "./Main";

import Footer from "./Footer";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <Main defaultCity="Philadelphia" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
