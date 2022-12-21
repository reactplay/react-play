export const FetchUserSkillMap = {
  display: 'Get User Skill Map',
  name: 'meta_user_skill_map',
  function: 'meta_user_skill_map',
  write: false,
  return: [{ skill_id_map: ['id', 'label'] }, { expert_level_id_map: ['id', 'label'] }]
};
