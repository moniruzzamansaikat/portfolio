import React from 'react';
import useSkills from '../../context/useSkills';

function SkillsCategories() {
  const { getCategories, activeCategory, setActiveCategory } = useSkills();

  return (
    <ul className="categories">
      {getCategories().map((category) => (
        <li
          className={category === activeCategory ? 'active' : ''}
          key={category}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}

export default SkillsCategories;
