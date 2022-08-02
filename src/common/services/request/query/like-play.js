export const LikeIndividualPlay = (Obj) => {
  const { play_id, user_id } = Obj;
  return {
    display: "Delete a tag",
    name: "insert_play_like_one",
    function: "insert_play_like_one",
    write: true,
    object: {
      play_id: play_id,
      user_id: user_id,
      liked: true,
    },
    return: ["id"],
  };
};

export const unlikeIndividualPlay = (Obj) => {
  return {
    display: "Update Like",
    name: "update_play_like",
    function: "update_play_like",
    write: true,
    where: {
      clause: {
        operator: "and",
        conditions: [
          {
            field: "play_id",
            operator: "eq",
            value: Obj.play_id,
          },
          {
            field: "user_id",
            operator: "eq",
            value: Obj.user_id,
          },
        ],
      },
    },
    value: {
      liked: false,
    },
    return: ["affected_rows"],
  };
};
