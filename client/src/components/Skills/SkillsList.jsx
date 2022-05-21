import React from 'react'
import useSkills from '../../context/useSkills'
import SkillItem from './SkillItem'

function SkillsList() {
  const { activeCategory, skills } = useSkills()

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory
        )

  return (
    <div className="skills">
      {filteredSkills.map(
        (skill, idx) =>
          skill.img && <SkillItem key={idx} skill={skill} />
      )}
    </div>
  )
}

export default SkillsList
