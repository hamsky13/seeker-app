import React from "react";
import "../assets/widget.css";

function Widget(props) {
  return (
    <div className="border-widget">
      <h2 className="text-widget">{props.text}</h2>
      <h1 className="number-widget">{props.number}</h1>
      <img className="icon-widget" src={props.icon} alt="icon" />
    </div>
  );
}

export default Widget;
