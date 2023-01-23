import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="row g-0  ">
      <div className="search-position mb-3">
        <form className="search-bar">
          <div className="col-6 searching">
            <input
              type="text"
              placeholder="Enter location"
              autocomplete="off"
              className="form-control "
              autoFocus="on"
            />
          </div>
          <span className="col-6 search-buttons">
            <input type="submit" className="btn 1" value=" 🔍 " />
            <input type="submit" className="btn btn-light-2" value=" 📍" />
          </span>
        </form>
      </div>
      <div className="col-8  box--location">
        <h1> Philadelphia </h1>
        <h2 className="date">Tuesday: January 3 at 11:11 am</h2>
      </div>
    </div>
  );
}
