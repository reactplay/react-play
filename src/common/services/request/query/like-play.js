export const LikeIndividualPlay = (Obj) => {
  const { play_id, user_id } = Obj;
  return {
    display: "Create Play Like",
    name: "Insert_Play_Like_Mutation",
    function: "insert_play_like_one",
    write: true,
    object: { play_id, user_id },
  };
};

export const dislikeIndividualPlay = (Obj) => {
  return {
    display: "Delete Play Like",
    name: "Delete_Play_Like_Mutation",
    function: "delete_play_like",
    write: true,
    where: {
      operator: "and",
      clause: [
        {
          field: "play_id",
          operator: "eq",
          value: Obj.play_id,
          type: "string",
        },
        {
          field: "user_id",
          operator: "eq",
          value: Obj.user_id,
          type: "string",
        },
      ],
    },
  };
};
