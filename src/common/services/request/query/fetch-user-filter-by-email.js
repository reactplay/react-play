export const FetchUserFilterByEmail = (email) => {
  return {
    display: 'get user',
    name: 'get_user',
    function: 'users',
    where: {
      clause: {
        conditions: [
          {
            field: 'email',
            operator: 'eq',
            value: email
          }
        ]
      }
    },
    return: ['id', 'displayName', 'email', 'avatarUrl', 'email']
  };
};
