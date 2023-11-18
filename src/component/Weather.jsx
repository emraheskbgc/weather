import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Weather = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [hiddenImg, setHiddenImg] = useState(true);
  const inputFocusRef = useRef(null);
  const [city, setCity] = useState("Ankara");
  const [weatherData, setWeatherData] = useState({});
  const [days, setDays] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&units=metric&cnt=5&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (city) {
      fetchData();
    }
  }, [city]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  console.log(
    weatherData.list &&
      weatherData.list[0] &&
      weatherData.list[0].weather[0] &&
      weatherData.list[0].weather[0].description
  );

  useEffect(() => {
    if (hiddenImg === false) {
      inputFocusRef.current.focus();
    }
  }, [hiddenImg]);

  const handleClickImg = () => {
    setHiddenImg(false);
    setCity("");
  };
  const handleBlurkInput = () => {
    setHiddenImg(true);
  };

  useEffect(() => {
    if (weatherData && weatherData.list) {
      const dayNames = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
      ];
      const days = weatherData.list.reduce((acc, data) => {
        const date = new Date(data.dt * 1000);
        const dayName = dayNames[date.getDay()];
        if (!acc[dayName]) {
          acc[dayName] = [];
        }
        acc[dayName].push(data);
        return acc;
      }, {});
      setDays(days);
      console.log(days);
    }
  }, [weatherData]);

  const weatherIcon =
    weatherData.list &&
    weatherData.list[0] &&
    weatherData.list[0].weather[0] &&
    weatherData.list[0].weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;

  return (
    <>
      <div className="searchInput">
        {hiddenImg ? (
          <img
            onClick={handleClickImg}
            src="search.png"
            alt=""
            className="searchImg"
          />
        ) : (
          <>
            <input
              ref={inputFocusRef}
              onBlur={handleBlurkInput}
              type="text"
              placeholder="Search Location"
              value={city}
              onChange={handleInputChange}
            />
            <img
              src="search.png"
              alt=""
              style={{ width: "30px", height: "30px" }}
            />
          </>
        )}
      </div>

      <div className="container ">
        <div className="row">
          <div className="weather-side col ">
            <div className="day">
              {weatherData && weatherData.city && weatherData.city.name}
              <span style={{ fontSize: "12px" }}>
                {" "}
                {weatherData && weatherData.city && weatherData.city.country}
              </span>
              <br />
              {days &&
                Object.keys(days).map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
            </div>

            <div className="statusImg">
              <img src={iconUrl} alt="Weather Icon" className="wheatherIcon" />
            </div>
            <div className="tempreture">
              <strong>
                {Math.ceil(
                  weatherData.list &&
                    weatherData.list[0] &&
                    weatherData.list[0].main &&
                    weatherData.list[0].main.temp
                )}
              </strong>
              <sup style={{ fontSize: "20px" }}>°C</sup>
            </div>
            <div className="status">
              {weatherData.list &&
                weatherData.list[0] &&
                weatherData.list[0].weather[0] &&
                weatherData.list[0].weather[0].description.toUpperCase()}
            </div>
          </div>
          <div className="col">col2</div>
        </div>
      </div>
    </>
  );
};

export default Weather;
