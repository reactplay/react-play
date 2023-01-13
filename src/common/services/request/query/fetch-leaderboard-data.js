const allPlaysByUser = {
  display: 'Fetch play count group by the creator',
  name: 'Fetch_Play_By_Users',
  function: 'plays',
  return: [
    'created_at',
    'slug',
    {
      user: ['avatarUrl', 'displayName', 'id', 'email']
    }
  ]
};

export const FetchPlayCountByUser = {
  getAllPlaysByUser() {
    return { ...allPlaysByUser };
  },

  getAllPlaysByUserByMonth(gte, lte) {
    return {
      ...allPlaysByUser,
      where: {
        clause: {
          operator: 'and',
          conditions: [
            {
              field: 'created_at',
              operator: 'lte',
              value: lte
            },
            {
              field: 'created_at',
              operator: 'gte',
              value: gte
            }
          ]
        }
      }
    };
  }
};
