import React from "react";
import Widget from "./Widget";
import IconNew from "../assets/new-candidate.svg";

function NewCandidate(props) {
  return (
    <div>
      <Widget text="New Candidate" number={props.number} icon={IconNew} />
    </div>
  );
}

export default NewCandidate;
