import React from "react";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="New York" />
      </header>
    </div>
  );
}

export default App;
