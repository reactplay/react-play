


import {useState, useEffect} from 'react';

import { submit } from 'common/services/request';

const useFilteredPlays = () => {
  const [loading, setLoading] = useState(true);
  const [plays, setPlays] = useState([]);
  const [error, setError] = useState(null);

  const fetchPlayPayload = [
    {
      display: "Filter plays by level, user, language, and multiple tags",
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
        {
          play_tags: { tag: ["name"] },
          where: {
            operator: "or",
            class: "tag",
            clause: [
              {
                field: "name",
                operator: "eq",
                value: "JSX",
                type: "string",
              },
              {
                field: "name",
                operator: "eq",
                value: "Schedule",
                type: "string",
              },
            ],
          },
        },
        "updated_at",
        { user: ["id", "displayName", "avatarUrl"] },
        "video",
      ],
      where: {
        operator: "and",
        clause: [
          {
            field: "owner_user_id",
            operator: "eq",
            value: "0680f581-6584-4bc4-bbe9-aa7c97567e72",
            type: "string",
          },
          {
            field: "level_id",
            operator: "eq",
            value: "4127ed16-bf37-4c34-bed0-282cd646cd53",
            type: "string",
          },
          {
            field: "language",
            operator: "eq",
            value: "js",
            type: "string",
          },
        ],
      },
    }
  ];

  useEffect(() => {
    const fetchPlays = async () => {
      setLoading(true);
      try {
        const res = await submit(fetchPlayPayload);
        console.log(res);
        setPlays(res[0]);
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

export default useFilteredPlays;