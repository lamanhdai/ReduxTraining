import React from 'react'
import './User.css'

export function User(props) {
  const {photo, username, money} = props

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  const formattedCurrency = formatter.format(money)
  return (
    <div className="user">
      {photo&&<div className="userPhoto"><img className="userPhotoIcon" src={photo} alt={username} /></div>}
      {username&&<div className="userMessage">Hello, {username}!</div>}
      {money
        &&<div className="userMoney">
            <div className="userAmount">{formattedCurrency}</div>
            <div className="userAmountText">Total Amount</div>
          </div>
      }
    </div>
  )
}