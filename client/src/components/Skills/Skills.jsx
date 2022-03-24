import React from 'react';
import SkillsCategories from './SkillsCategories';
import '../../styles/Skills.css';
import SkillsList from './SkillsList';

function Skills() {
  return (
    <section className="skills-compo" id="skills">
      <div className="container">
        <h2 className="subtitle">Skills</h2>
        <SkillsCategories />
        <SkillsList />
      </div>
    </section>
  );
}

export default Skills;
