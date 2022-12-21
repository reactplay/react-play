import { FetchUserSkillMap } from 'common/services/request/query/user_skill_map';

const FetchUserSkillMapByUserId = (id) => {
  const payload = { ...FetchUserSkillMap };
  payload.where = {
    clause: {
      conditions: [
        {
          field: 'user_id',
          operator: 'eq',
          value: id
        }
      ]
    }
  };
  return payload;
};

const InsertUserSkillMap = (user_id, skill_id, expert_level) => {
  return {
    display: 'insert User Skill Map',
    name: 'insert_meta_user_skill_map_one',
    function: 'insert_meta_user_skill_map_one',
    write: true,
    object: {
      user_id: '03724f8f-e5c7-423d-a98c-a7fdee9e959f',
      skill_id: 'a93a9a37-7a38-4862-b832-402d5c70f40f',
      expert_level: '0b03e8ba-e2a6-4959-8ff3-43bdef3a701c'
    },
    return: ['id']
  };
};

export const user_skill_map = {
  FetchUserSkillMapByUserId,
  InsertUserSkillMap
};
