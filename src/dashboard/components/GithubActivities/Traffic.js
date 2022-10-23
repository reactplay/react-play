import { getCloneFigures, getViews } from 'common/services/dashboard/fetch-github-stats';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import '../../style/githubActivities.scss';
import Clones from './Clones';
import Visitors from './Visitors';

const Traffic = () => {
  const [countView, setCountView] = useState(0);
  const [countUnique, setCountUnique] = useState(0);
  const [viewData, setViewData] = useState([]);
  const [countCloneView, setCountCloneView] = useState(0);
  const [countCloneUnique, setCountCloneUnique] = useState(0);
  const [viewCloneData, setViewCloneData] = useState([]);



  useEffect(() => {
    async function getViewData() {
      // clone count

      const resCloneFig = await getCloneFigures();
      setCountCloneView(await resCloneFig.count);
      setCountCloneUnique(await resCloneFig.uniques);
      for (const data of await resCloneFig.clones) {
        data.timestamp = moment(data.timestamp).utc().format('MMM Do YYYY')
      }
      setViewCloneData(await resCloneFig.clones);

      // visitors count
      const res = await getViews();
      setCountView(await res.count);
      setCountUnique(await res.uniques);

      for (const data of await res.views) {
        data.timestamp = moment(data.timestamp).utc().format('MMM Do YYYY')
      }
      setViewData(await res.views);

    }
    getViewData();

  }, [])
  const [activeTab, setActiveTab] = useState("clones");
  return (
    <div className="px-4 pt-5 pb-10 ">
      <h1 className="mb-1 col-span-1 text-center md:text-left text-xl font-bold">Github Traffic</h1>
      <div className=' headerBreakerLine border-b-4'></div>
      <div className="flex gap-1 mt-5 justify-around">
        <button
          onClick={() => setActiveTab("clones")}
          className={
            activeTab === "clones"
              ? "activeTabNavTraffic block"
              : "tabNavTraffic  block"}>
          Clones
        </button>
        <button
          onClick={() => setActiveTab("visitors")}
          className={
            activeTab === "visitors"
              ? "activeTabNavTraffic  block"
              : "tabNavTraffic block"}>
          Visitors
        </button>
      </div>
      {
        activeTab === "clones" ?
          <Clones
            count={countCloneView}
            uniques={countCloneUnique}
            data={viewCloneData}
          /> :
          <Visitors
            count={countView}
            uniques={countUnique}
            data={viewData}
          />
      }
    </div>
  );
}
export default Traffic;