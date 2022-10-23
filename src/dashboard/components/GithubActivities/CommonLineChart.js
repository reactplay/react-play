import { CartesianGrid, Legend, Tooltip, Line, LineChart, XAxis, YAxis } from 'recharts';
const CommonLineChart = ({
  viewData,
  chartWidth,
  dataKey,
  LineKeys,
  chartParentRef,
  countView,
  countUnique,
  title,
  logo,
  legends
}) => {
  return (
    <>
      <h4 className=" text-lg flex my-4">
        {logo}
        {title}
      </h4>
      <div ref={chartParentRef}>
        <LineChart
          height={400}
          width={chartWidth}
          data={viewData}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={LineKeys[0]} stroke="#6CD917" />
          <Line type="monotone" dataKey={LineKeys[1]} stroke="#00F2FE" />
        </LineChart>
        <div className="flex justify-around px-10">
          <span className=" text-sm">{countView} &nbsp;{legends[0]}</span>
          <span className=" text-sm">{countUnique} &nbsp; {legends[1]} </span>
        </div>
      </div>
    </>
  );
}
export default CommonLineChart;