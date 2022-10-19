import { getPlay } from "common/services/dashboard/get-play";
import { useEffect, useState } from "react";

const filterOption = [
  'year',
  'month',
  'week'
];


const MainDashboard = () => {

  const [playData, setPlayData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(filterOption[0]);

  useEffect(() => {
    // getPlay('year');
  }, [selectedFilter])
  return (
    <div>

      Dashboard

    </div>
  );
}
export default MainDashboard;