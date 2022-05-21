import React from 'react'

function FreelanceCard({ site = '', color, url, icon }) {
  return (
    <div className="freelance_card">
      <a href={url} target="_blank" rel="noreferrer">
        <strong className="me-2">{icon}</strong>
        {site}
      </a>
    </div>
  )
}

export default FreelanceCard
