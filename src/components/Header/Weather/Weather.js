import React from "react";

export default function Weather(props) {
  const { obj } = props;
  return (
    <div>
      <p>
        {obj.name} - {obj.main.temp}&deg;F
      </p>
      <img
        src={`http://openweathermap.org/img/w/${obj.weather[0].icon}.png`}
        alt={`${obj.weather[0].description}`}
      />
    </div>
  );
}
