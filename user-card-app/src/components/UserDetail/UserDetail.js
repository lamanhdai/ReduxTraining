import React from 'react'
import './UserDetail.css'

export const UserDetail = (props) => {
  const {label, text} = props
  return (
    <div className="UserDetail">
      <span className="UserDetail__label">{label}</span>
      <span className="UserDetail__text">{text}</span>
    </div>
  )
}