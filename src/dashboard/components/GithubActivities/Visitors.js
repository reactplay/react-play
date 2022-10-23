import { getViews } from 'common/services/dashboard/fetch-github-stats';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import CommonLineChart from './CommonLineChart';


const Visitors = ({
  count,
  uniques,
  data
}) => {

  const [chartWidth, setChartWidth] = useState(0);
  const chartParentRef = useRef(null);

  useEffect(() => {
    setChartWidth(chartParentRef.current.offsetWidth);
  }, []);

  const svg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mr-2 mt-1 w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  return (
    <CommonLineChart
      viewData={data}
      chartWidth={chartWidth}
      chartParentRef={chartParentRef}
      title="Visitors"
      logo={svg}
      dataKey="timestamp"
      countUnique={count}
      countView={uniques}
      legends={[
        "Views",
        "Unique visitors"
      ]}
      LineKeys={[
        "count",
        "uniques"]
      }
    />
  );
}

export default Visitors;