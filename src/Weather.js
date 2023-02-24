import React from "react";
import "./styles.css";

export default function Weather() {
  let weatherForecast = {
    city: "New York",
    date: "Friday 12:00",
    description: "Cloudy",
    temperature: "15",
    humidity: "2",
    wind: "0",
    imgURL: "https://openweathermap.org/img/wn/09n@2x.png",
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <form className="search-form">
            <input
              id="city-input"
              type="text"
              placeholder="Enter a City"
              autoFocus="on"
              className="form-control shadow-sm search-input"
            />
            <input
              id="search-input"
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm w-100"
            />
          </form>
        </div>
      </form>
      <div className="weather-app">
        <h1>{weatherForecast.city}</h1>
        <ul>
          <li>Last Updated: {weatherForecast.date}</li>
          <li>{weatherForecast.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img alt="icon" src={weatherForecast.imgURL} />
              <span className="units">
                <strong>{weatherForecast.temperature}</strong>
                <a href="/"> °C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherForecast.humidity}%</li>
              <li>Wind: {weatherForecast.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <h2>This project is open-sourced by Natalia Mojica</h2>
    </div>
  );
}
