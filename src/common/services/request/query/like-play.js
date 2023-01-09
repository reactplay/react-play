export const likeIndividualPlay = (obj) => {
  const { play_id, user_id } = obj;

  return {
    display: 'Delete a tag',
    name: 'insert_play_like_one',
    function: 'insert_play_like_one',
    write: true,
    object: {
      play_id: play_id,
      user_id: user_id,
      liked: true
    },
    return: ['id']
  };
};

export const unlikeIndividualPlay = (obj) => {
  return {
    display: 'Update Like',
    name: 'update_play_like',
    function: 'update_play_like',
    write: true,
    where: {
      clause: {
        operator: 'and',
        conditions: [
          {
            field: 'play_id',
            operator: 'eq',
            value: obj.play_id
          },
          {
            field: 'user_id',
            operator: 'eq',
            value: obj.user_id
          }
        ]
      }
    },
    value: {
      liked: obj.liked
    },
    return: ['affected_rows']
  };
};
