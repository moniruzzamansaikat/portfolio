import React from 'react'
import './Alert.css'

const Alert = ({ children, type, autoClose }) => {
  const ref = React.useRef()

  const closeAlert = () => {
    ref.current.remove()
  }

  React.useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        ref.current.remove()
      }, 3000)
      return () => clearTimeout(timer)
    }
  })

  return (
    <div className={`alert ${type}`} ref={ref}>
      <span>{children}</span>
      <span className="close" onClick={closeAlert}>
        &times;
      </span>
    </div>
  )
}

export default Alert
