import { submit, submitMutation } from 'common/services/request';
import { Skills } from 'common/services/skills';
import { useEffect, useState } from 'react';

export const useSkillsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSkills = async () => {
    setLoading(true);
    try {
      const res = await submit(Skills.GetSkills());
      setLoading(false);
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };
  const insertSkill = async (skill) => {
    setLoading(true);
    try {
      const res = await submitMutation(Skills.InsertSkill(skill));
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchSkills();
  }, []);

  return [data, loading, fetchSkills, insertSkill];
};
