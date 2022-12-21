import { FetchUserProfileQuery } from './request/query/user_profile';

const FetchUserProfileById = (id) => {
  const payload = { ...FetchUserProfileQuery };
  payload.where = {
    clause: {
      class: 'users_user_profile_map',
      conditions: [
        {
          field: 'id',
          operator: 'eq',
          value: id
        }
      ]
    }
  };
  return payload;
};
export const InsertUserProfile = () => {
  return {
    display: 'Insert User Profile',
    name: 'insert_meta_user_profile_one',
    function: 'insert_meta_user_profile_one',
    write: true,
    object: {},
    return: ['id']
  };
};
const UpdateUserProfile = (id, obj) => {
  return {
    display: 'Update User Profile',
    name: 'update_meta_user_profile',
    function: 'update_meta_user_profile',
    write: true,
    value: obj,
    where: {
      clause: {
        conditions: [
          {
            field: 'id',
            operator: 'eq',
            value: id
          }
        ]
      }
    },
    return: ['affected_rows']
  };
};

export const user_profile = {
  FetchUserProfileById,
  InsertUserProfile,
  UpdateUserProfile
};
