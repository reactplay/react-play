import { useEffect, useRef, useState } from 'react';
import logo from '../assets/loading-loader.gif';
const InfiniteScroll = (props) => {
  const { renderListItem, getData, listData, apiQuery, noData } = props;
  const pageNumber = useRef(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);
  const lastElementOberver = (node) => {
    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        pageNumber.current += 1;
        fetchData();
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  };

  const renderList = () => {
    if (noData) {
      return (
        <span className="m-auto col-span-4 font-bold text-xl text-red-700">
          No such results found.
        </span>
      );
    }

    return listData.map((currentItem, index) => {
      if (index === listData.length - 1) {
        return renderListItem(currentItem, lastElementOberver);
      }

      return renderListItem(currentItem, null);
    });
  };
  const fetchData = () => {
    setLoading(true);
    getData(apiQuery, pageNumber.current).finally(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [apiQuery]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-2 m-2">{renderList()}</div>
      {loading && <img className="w-52 m-auto" src={logo} />}
    </>
  );
};

export default InfiniteScroll;
