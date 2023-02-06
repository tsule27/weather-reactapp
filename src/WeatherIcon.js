import React from "react";

export default function WeatherIcon(props) {
  return (
    <img
      className="d-flex align-items-center"
      src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`}
      alt={props.alt}
      size={props.size}
    />
  );
}
