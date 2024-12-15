import React from 'react';

interface SkillProps {
  skill: string;
  color: string;
  level: string;
}

const Skill: React.FC<SkillProps> = ({ skill, color, level }) => {
  return (
    <div className="bio-card_skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  );
};

export default Skill;
