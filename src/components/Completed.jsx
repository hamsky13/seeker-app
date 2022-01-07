import React from "react";
import Widget from "./Widget";
import IconCompleted from "../assets/completed.svg";

function Completed(props) {
  return (
    <div>
      <Widget text="Completed" number={props.number} icon={IconCompleted} />
    </div>
  );
}

export default Completed;
