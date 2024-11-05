import React from 'react';
import './styles.css';
import Avatar from './components/Avatar';
import Intro from './components/Intro';
import SkillList from './components/SkillList';

const App = () => {
  return (
    <div className="bio-card_card">
      <Avatar />
      <div className="bio-card_data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
};

export default App;
