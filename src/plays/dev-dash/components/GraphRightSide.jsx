import React from "react";
import {
  BarChart,
  Legend,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
const GraphRightSide = ({
  graphType,
  reactions,
  activeClassStyle,
  setGraphType,
}) => {
  return (
    <div className="right">
      {/* Choices to switch b/w bar chart and area chart */}

      <div className="graph-main">
        <div className="reaction-graph">
          {graphType === "bar" ? (
            <>
              <BarChart
                width={790}
                height={220}
                data={reactions}
                margin={{ top: 2, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="reactions" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="reactions" fill="#8884d8" />
              </BarChart>
            </>
          ) : (
            <>
              <AreaChart
                width={790}
                height={220}
                data={reactions}
                margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c62ed" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#7c62ed" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="Name" />
                <YAxis />
                <CartesianGrid strokeDasharray="2 2" />
                <Tooltip />
                <Legend />

                <Area
                  type="monotone"
                  dataKey="reactions"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </>
          )}
        </div>
        <div className="comment-graph">
          {/* comment graph */}
          {graphType === "bar" ? (
            <>
              <BarChart
                width={790}
                height={220}
                data={reactions}
                margin={{ top: 2, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="comments" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="comments" fill="#8884d8" />
              </BarChart>
            </>
          ) : (
            <>
              <AreaChart
                width={790}
                height={220}
                data={reactions}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c62ed" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#7c62ed" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="Name" />
                <YAxis />
                <CartesianGrid strokeDasharray="2 2" />
                <Tooltip />
                <Legend />

                <Area
                  type="monotone"
                  dataKey="comments"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </>
          )}
        </div>
      </div>
      <div className="choices">
        <button
          id="bar"
          style={graphType === "bar" ? activeClassStyle : {}}
          onClick={(e) => setGraphType(e.target.id)}
        >
          bar chart
        </button>
        <button
          id="area"
          style={graphType === "area" ? activeClassStyle : {}}
          onClick={(e) => setGraphType(e.target.id)}
        >
          area chart
        </button>
      </div>
    </div>
  );
};

export default GraphRightSide;
