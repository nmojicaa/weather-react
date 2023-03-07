import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Nataia Mojica and is open-sourced on Guthub
        </footer>
      </div>
    </div>
  );
}
