import React from "react";
import Widget from "./Widget";
import IconNotMet from "../assets/not-met.svg";

function NotMet(props) {
  return (
    <div>
      <Widget text="Not Met" number={props.number} icon={IconNotMet} />
    </div>
  );
}

export default NotMet;
