export const updatePlayInfo = (obj) => {
    return {
      display: "Update Play Info",
      name: "update_play",
      function: "update_play",
      write: true,
      where: {
        clause: {
          operator: "and",
          conditions: [
            {
              field: "play_id",
              operator: "eq",
              value: obj.play_id,
            },
            {
              field: "user_id",
              operator: "eq",
              value: obj.user_id,
            },
          ],
        },
      },
      value: obj.editObj,
      return: ["affected_rows"],
    };
  };