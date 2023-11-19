import React, { useEffect, useState } from "react";

const RightCol = ({ weatherData }) => {
  const otherWeatherData =
    weatherData.list && weatherData.list.length > 1
      ? weatherData.list.slice(1, 5)
      : [];
  console.log(otherWeatherData);

  const weatherIcon1 =
    otherWeatherData[0] &&
    otherWeatherData[0].weather[0] &&
    otherWeatherData[0].weather[0].icon;
  const iconUrl1 = `https://openweathermap.org/img/wn/${weatherIcon1}.png`;
  const weatherIcon2 =
    otherWeatherData[1] &&
    otherWeatherData[1].weather[0] &&
    otherWeatherData[1].weather[0].icon;
  const iconUrl2 = `https://openweathermap.org/img/wn/${weatherIcon2}.png`;
  const weatherIcon3 =
    otherWeatherData[2] &&
    otherWeatherData[2].weather[0] &&
    otherWeatherData[2].weather[0].icon;
  const iconUrl3 = `https://openweathermap.org/img/wn/${weatherIcon3}.png`;
  const weatherIcon4 =
    otherWeatherData[3] &&
    otherWeatherData[3].weather[0] &&
    otherWeatherData[3].weather[0].icon;
  const iconUrl4 = `https://openweathermap.org/img/wn/${weatherIcon4}.png`;

  return (
    <>
      <div className="row row-cols-2 divDesign ">
        <div className="border-bottom border-end">
          <p>
            {otherWeatherData[0] && otherWeatherData[0].dt_txt.slice(11, 16)}
          </p>
          <img src={iconUrl1} alt="" />
          <p>
            <strong>
              {Math.ceil(
                otherWeatherData &&
                  otherWeatherData[0] &&
                  otherWeatherData[0].main &&
                  otherWeatherData[0].main.temp
              )}
            </strong>
            <sup style={{ fontSize: "10px" }}>°C</sup>
          </p>
          <p style={{ fontSize: "10px", color: "#eaac8b" }}>
            {otherWeatherData &&
              otherWeatherData[0] &&
              otherWeatherData[0].weather[0] &&
              otherWeatherData[0].weather[0].description.toUpperCase()}
          </p>
        </div>
        <div className="border-bottom">
          <p>
            {otherWeatherData[1] && otherWeatherData[1].dt_txt.slice(11, 16)}
          </p>
          <img src={iconUrl2} alt="" />
          <p>
            <strong>
              {Math.ceil(
                otherWeatherData &&
                  otherWeatherData[1] &&
                  otherWeatherData[1].main &&
                  otherWeatherData[1].main.temp
              )}
            </strong>
            <sup style={{ fontSize: "10px" }}>°C</sup>
          </p>
          <p style={{ fontSize: "10px", color: "#eaac8b" }}>
            {otherWeatherData &&
              otherWeatherData[1] &&
              otherWeatherData[1].weather[0] &&
              otherWeatherData[1].weather[0].description.toUpperCase()}
          </p>
        </div>
        <div className="border-end">
          <p>
            {otherWeatherData[2] && otherWeatherData[2].dt_txt.slice(11, 16)}
          </p>
          <img src={iconUrl3} alt="" />
          <p>
            <strong>
              {Math.ceil(
                otherWeatherData &&
                  otherWeatherData[2] &&
                  otherWeatherData[2].main &&
                  otherWeatherData[2].main.temp
              )}
            </strong>
            <sup style={{ fontSize: "10px" }}>°C</sup>
          </p>
          <p style={{ fontSize: "10px", color: "#eaac8b" }}>
            {otherWeatherData &&
              otherWeatherData[2] &&
              otherWeatherData[2].weather[0] &&
              otherWeatherData[2].weather[0].description.toUpperCase()}
          </p>
        </div>
        <div>
          <p>
            {otherWeatherData[3] && otherWeatherData[3].dt_txt.slice(11, 16)}
          </p>
          <img src={iconUrl4} alt="" />
          <p>
            <strong>
              {Math.ceil(
                otherWeatherData &&
                  otherWeatherData[3] &&
                  otherWeatherData[3].main &&
                  otherWeatherData[3].main.temp
              )}
            </strong>
            <sup style={{ fontSize: "10px" }}>°C</sup>
          </p>
          <p style={{ fontSize: "10px", color: "#eaac8b" }}>
            {otherWeatherData &&
              otherWeatherData[3] &&
              otherWeatherData[3].weather[0] &&
              otherWeatherData[3].weather[0].description.toUpperCase()}
          </p>
        </div>
      </div>
    </>
  );
};

export default RightCol;
