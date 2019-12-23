import React from 'react'
import './ButtonGroup.css'
import {withdrawMoney} from '../../actions'
import {store} from '../../store'

export function ButtonGroup() {
  const withdraw = (e) => {
    store.dispatch(withdrawMoney(e.target.dataset.amount))
  }
  return (
    <div className="buttonGroup">
      <div className="buttonGrid">
        <div className="buttonWithdraw" data-amount="10000" onClick={withdraw}>withdraw $10,000</div>
        <div className="buttonWithdraw" data-amount="5000" onClick={withdraw}>withdraw $5,000</div>
      </div>
    </div>
  )
}