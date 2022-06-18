


import {useState, useEffect} from 'react';

import { submit } from 'common/services/request';

const useGetPlays = () => {
  const [loading, setLoading] = useState(true);
  const [plays, setPlays] = useState([]);
  const [error, setError] = useState(null);

  const fetchPlayPayload = [
    {
      display: "Simple fetch play",
      name: "Fetch_Plays",
      function: "plays",
      write: false,
      params: [
        "blog",
        "component",
        "cover",
        "created_at",
        "description",
        "featured",
        "github",
        "id",
        "language",
        { level: ["name"] },
        "name",
        "path",
        { play_tags: { tag: ["name"] } },
        "updated_at",
        { user: ["id", "displayName", "avatarUrl"] },
        "video",
      ],
    },
  ];

  useEffect(() => {
    const fetchPlays = async () => {
      setLoading(true);
      try {
        const res = await submit(fetchPlayPayload);
        console.log(res);
        setPlays(res);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }
    fetchPlays();
  }, []);

  return [
    loading,
    error,
    plays
  ];
}

export default useGetPlays;