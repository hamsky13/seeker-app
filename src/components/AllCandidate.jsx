import React from "react";
import Widget from "./Widget";
import IconAll from "../assets/all-candidate.svg";

function AllCandidate(props) {
  return (
    <div>
      <Widget text="All Candidate" number={props.number} icon={IconAll} />
    </div>
  );
}

export default AllCandidate;
