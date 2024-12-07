import React from 'react';

import Skill from './Skill';

function SkillList() {
  const skills = [
    {
      skill: 'HTML+CSS',
      level: 'advanced',
      color: '#2662EA'
    },
    {
      skill: 'JavaScript',
      level: 'advanced',
      color: '#EFD81D'
    },
    {
      skill: 'Web Design',
      level: 'advanced',
      color: '#C3DCAF'
    },
    {
      skill: 'Git and GitHub',
      level: 'intermediate',
      color: '#E84F33'
    },
    {
      skill: 'React',
      level: 'advanced',
      color: '#60DAFB'
    },
    {
      skill: 'Svelte',
      level: 'beginner',
      color: '#FF3B00'
    }
  ];

  return (
    <div className="bio-card_skill-list">
      {skills.map((skill) => (
        <Skill color={skill.color} level={skill.level} skill={skill.skill} />
      ))}
    </div>
  );
}

export default SkillList;
