import React from 'react'
import './Input.css'

function Input({ ...props }) {
  const { type, name, errors } = props

  const error = errors.hasOwnProperty(name) && errors[name]

  return type === 'textarea' ? (
    <div className={`input_box ${error && 'error'}`}>
      <textarea rows={4} className="input" {...props}></textarea>
      <small className="error">{error}</small>
    </div>
  ) : (
    <div className={`input_box ${error && 'error'}`}>
      <input className="input" {...props} />
      <small className="error">{error}</small>
    </div>
  )
}

export default Input
