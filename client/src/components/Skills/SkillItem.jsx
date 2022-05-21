import React from 'react'

const imgPathtoName = (img) => {
  return img.split('/')[3].split('.')[0]
}

function SkillItem({ skill }) {
  return (
    <div className="text-center skill-item">
      <img
        src={skill.img}
        alt=""
        className="img-fluid mb-2"
      />
      <p className="text-center text-uppercase">
        {imgPathtoName(skill.img)}
      </p>
    </div>
  )
}

export default SkillItem
