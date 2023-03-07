import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer className="footer-copy">
          This project was coded by Nataia Mojica and it is {""}
          <a
            href="https://github.com/nmojicaa/weather-react"
            target="_blank"
            className="footer"
            rel="norefferrer"
          >
            open-sourced on Guthub
          </a>
        </footer>
      </div>
    </div>
  );
}
