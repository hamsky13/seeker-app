import React from "react";
import Widget from "./Widget";
import IconOnProgress from "../assets/on-progress.svg";

function OnProgress(props) {
  return (
    <div>
      <Widget text="On Progress" number={props.number} icon={IconOnProgress} />
    </div>
  );
}

export default OnProgress;
