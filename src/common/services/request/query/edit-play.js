export const updatePlayInfo = (obj) => {
  return {
    display: 'Update Play Info',
    name: 'update_plays',
    function: 'update_plays',
    write: true,
    where: {
      clause: {
        operator: 'and',
        conditions: [
          {
            field: 'id',
            operator: 'eq',
            value: obj.play_id
          }
        ]
      }
    },
    value: obj.editObj,
    return: ['affected_rows']
  };
};
