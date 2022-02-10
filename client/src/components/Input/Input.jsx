import React from 'react';
import './Input.css';

function Input({ ...props }) {
  const { type } = props;

  return type === 'textarea' ? (
    <textarea rows={4} className="input" {...props}></textarea>
  ) : (
    <input className="input" {...props} />
  );
}

export default Input;
