export const LikeIndividualPlay = (Obj) => {
  const { play_id, user_id, created_at } = Obj;
  return [
    {
      display: "Like Play",
      name: "Like_Play",
      function: "like",
      write: true,
      params: ["id", play_id, user_id, created_at],
    },
  ];
};
