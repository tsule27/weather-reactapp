import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-nigh": "CLEAR_NIGHT",
    "few-clouds-day": "FEW_CLOUDS_DAY",
    "few-clouds-night": "FEW_CLOUDS_NIGHT",
    "scattered-clouds-day": "SCATTERED_CLOUDS_DAY",
    "scattered-clouds-night": "SCATTERED_CLOUDS_NIGHT",
    "broken-clouds-day": "BROKEN_CLOUDS_DAY",
    "broken-clouds-night": "BROKEN_CLOUDS_NIGHT",
    "shower-rain-day": "SHOWER_RAIN_DAY",
    "shower-rain-night": "SHOWER_RAIN_NIGHT",
    "rain-day": "RAIN_DAY",
    "rain-night": "RAIN_NIGHT",
    "thunderstorm-day": "THUNDERSTORM_DAY",
    "thunderstorm-night": "THUNDERSTORM_NIGHT",
    "snow-day": "SNOW_DAY",
    "snow-night": "SNOW_NIGHT",
    "mist-day": "MIST_DAY",
    "mist-night": "MIST_NIGHT",
  };

  return (
    <img
      src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`}
      alt={props.alt}
      width="160px"
    />
  );
}
