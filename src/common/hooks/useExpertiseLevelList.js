import { GetExpertiseLevel } from "common/services/expertise_level";
import { submit } from "common/services/request";
import { useEffect, useState } from "react";

export const useExpertLevelsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    setLoading(true);
    try {
      const res = await submit(GetExpertiseLevel());
      setLoading(false);
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return [data, loading];
};
