import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Weather-Forecase-day">Thurs</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <br />
          <span className="WeatherForecast-temperature-max">19°</span>
          <span className="WeatherForecast-temperature-min">10°</span>
        </div>
      </div>
    </div>
  );
}