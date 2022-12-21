const GetSkills = () => {
  return {
    display: 'Get Skills',
    name: 'meta_user_skills',
    function: 'meta_user_skills',
    return: ['id', 'label']
  };
};

/* insert a new skill */
const InsertSkill = (label) => {
  return {
    display: 'Get Skills',
    name: 'insert_meta_user_skills_one',
    function: 'insert_meta_user_skills_one',
    object: {
      label
    },
    return: ['id']
  };
};

export const Skills = {
  GetSkills,
  InsertSkill
};
