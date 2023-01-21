export const FetchBadgesFilterByUserId = (id, claimed) => {
  return {
    display: 'Get badges',
    name: 'get_badges',
    function: 'meta_user_badge_map',
    where: {
      clause: {
        operator: 'and',
        conditions: [
          {
            field: 'claimed',
            operator: 'eq',
            value: claimed
          },
          {
            field: 'user_id',
            operator: 'eq',
            value: id
          }
        ]
      }
    },
    return: [
      'claimed',
      {
        badge_id_map: ['level', 'image', 'tag', 'description']
      },
      {
        user_id_map: {
          users_user_profile_map: ['displayName', 'email']
        }
      }
    ]
  };
};

export const FetchAllBadgesFilterByUserId = (id) => {
  return {
    display: 'Get badges',
    name: 'get_badges',
    function: 'meta_user_badge_map',
    where: {
      clause: {
        conditions: [
          {
            field: 'user_id',
            operator: 'eq',
            value: id
          }
        ]
      }
    },
    return: [
      'claimed',
      {
        badge_id_map: ['level', 'image', 'tag', 'description']
      },
      {
        user_id_map: {
          users_user_profile_map: ['displayName', 'email']
        }
      }
    ]
  };
};
