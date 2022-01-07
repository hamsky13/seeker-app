import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "../assets/pie-job.css";

function DataAnalyst(props) {
  const COLORS = ["#0F123F", "#E4E5E7"];
  return (
    <div className="bungkus">
      <div className="text-persen">
        <h1 className="presentase">
          {(props.data[0].value / (props.data[0].value + props.data[1].value)) *
            100}
          %
        </h1>
        <h2 className="job-title">{props.data[0].name}</h2>
      </div>
      <div className="chart-need">
        <PieChart width={200} height={200}>
          <Pie
            data={props.data}
            cx={100}
            cy={100}
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {props.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default DataAnalyst;
