import {createStore} from "redux"
import {bankReducer} from '../reducers'

const initialState = {
  account: {
    photo: './man.png',
    username: 'Dai',
    money: 10000000
  }
}
const store = createStore(bankReducer, initialState)
export {store}