import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import AllCandidate from "../components/AllCandidate";
import NewCandidate from "../components/NewCandidate";
import OnProgress from "../components/OnProgress";
import Pending from "../components/Pending";
import Completed from "../components/Completed";
import NotMet from "../components/NotMet";
import BackEnd from "../components/BackEnd";
import Marketing from "../components/Marketing";
import FrontEnd from "../components/FrontEnd";
import DataAnalyst from "../components/DataAnalyst";
import OpeningJob from "../assets/opening-job.svg";
import "../assets/dashboard.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";

function Dashboard() {
  const [candidateList, setCandidateList] = useState([]);
  const [overview, setOverview] = useState([]);

  const needBackEnd = [
    { name: "Back End", value: 5 },
    { name: "Not Met", value: 5 },
  ];

  const needMarketing = [
    { name: "Marketing", value: 2 },
    { name: "Not Met", value: 6 },
  ];

  const needFrontEnd = [
    { name: "Front End", value: 6 },
    { name: "Not Met", value: 2 },
  ];

  const needDataAnalyst = [
    { name: "Data Analyst", value: 10 },
    { name: "Not Met", value: 0 },
  ];

  const dataPie = [
    { name: "University A", value: 400 },
    { name: "University B", value: 300 },
    { name: "University C", value: 300 },
  ];

  const COLORS = ["#FF8988", "#0F123F", "#EFEFEF"];

  const fetchCandidate = () => {
    axios
      .get("http://localhost:2000/candidate")
      .then((result) => {
        setCandidateList(result.data);
      })
      .catch(() => alert("Terjadi kesalahan di server"));
  };

  const fetchOverview = () => {
    axios
      .get("http://localhost:2000/overview")
      .then((result) => {
        setOverview(result.data);
      })
      .catch(() => alert("Terjadi kesalahan di server"));
  };

  useEffect(() => {
    fetchCandidate();
    fetchOverview();
  }, []);

  return (
    <div className="body-dashboard">
      <Navbar />
      <div className="isi">
        <h1 className="title-dashboard">Dashboard</h1>
        <div className="summary">
          <AllCandidate number={candidateList.length} />
          <NewCandidate
            number={candidateList.filter((val) => val.status === "New").length}
          />
          <OnProgress
            number={
              candidateList.filter((val) => val.status === "On Progress").length
            }
          />
          <Pending
            number={
              candidateList.filter((val) => val.status === "Pending").length
            }
          />
          <NotMet
            number={
              candidateList.filter((val) => val.status === "Not Met").length
            }
          />
          <Completed
            number={
              candidateList.filter((val) => val.status === "Completed").length
            }
          />
        </div>
        <div className="chart">
          <div className="line-chart">
            <div className="title-line-chart">
              <h1>Candidate Overview</h1>
            </div>
            <ResponsiveContainer>
              <AreaChart
                width={730}
                height={250}
                data={overview}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F123F" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0F123F" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorOnProgress"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#FF7171" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FF7171" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF922B" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FF922B" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorNotMet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3476F2" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3476F2" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorCompleted"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="0 0" />
                <Tooltip />
                <Legend iconType={"square"} verticalAlign="top" height={36} />
                <Area
                  type="monotone"
                  dataKey="new"
                  stroke="#0F123F"
                  fillOpacity={1}
                  fill="url(#colorNew)"
                />
                <Area
                  type="monotone"
                  dataKey="onProgress"
                  stroke="#FF7171"
                  fillOpacity={1}
                  fill="url(#colorOnProgress)"
                />
                <Area
                  type="monotone"
                  dataKey="pending"
                  stroke="#FF922B"
                  fillOpacity={1}
                  fill="url(#colorPending)"
                />
                <Area
                  type="monotone"
                  dataKey="notMet"
                  stroke="#3476F2"
                  fillOpacity={1}
                  fill="url(#colorNotMet)"
                />
                <Area
                  type="monotone"
                  dataKey="completed"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorCompleted)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="doughnut">
            <div className="title-doughnut">
              <h1>Pie Chart</h1>
            </div>
            <div className="doughnut-chart">
              <PieChart width={200} height={200}>
                <Pie
                  data={dataPie}
                  cx={100}
                  cy={100}
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  iconType={"circle"}
                  layout="vertical"
                  verticalAlign="bottom"
                  height={2}
                />
              </PieChart>
            </div>
          </div>
        </div>
        <div className="need-met">
          <div className="title-need">
            <h1>Need vs Met</h1>
          </div>
          <div className="need-vs-meet">
            <div className="pie-need-met">
              <BackEnd data={needBackEnd} />
              <Marketing data={needMarketing} />
              <FrontEnd data={needFrontEnd} />
              <DataAnalyst data={needDataAnalyst} />
            </div>
          </div>
          <div className="summary-need-met">
            <div className="cover-summary">
              <div className="opening-job">
                <img src={OpeningJob} alt="opening job" />
                <div className="text-opening-job">
                  <h3 className="text-job">Opening Job</h3>
                  <h1 className="angka-opening">120</h1>
                </div>
              </div>
              <div className="work-average-year">
                <img src={OpeningJob} alt="opening job" />
                <div className="text-opening-job">
                  <h3 className="text-work">Work Candidate Average</h3>
                  <h1 className="angka-work">1 Year</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
