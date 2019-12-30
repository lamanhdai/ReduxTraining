import React from 'react'
import './Introduction.css'

export const Introduction = (props) => {
  const {label, text} = props
  return (
    <div className="Introduction">
      <span className="Introduction__label">{label}</span> <span className="Introduction__text">{text}</span>
    </div>
  )
}
