import {createStore} from "redux"
import {bankReducer} from '../reducers'

const initialState = {
  amount: 2500000
}
const store = createStore(bankReducer, initialState)
export {store}