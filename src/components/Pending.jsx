import React from "react";
import Widget from "./Widget";
import IconPending from "../assets/pending.svg";

function Pending(props) {
  return (
    <div>
      <Widget text="Pending" number={props.number} icon={IconPending} />
    </div>
  );
}

export default Pending;
