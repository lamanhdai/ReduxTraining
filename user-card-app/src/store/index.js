import {createStore} from 'redux'
import {CardReducer} from '../reducers'

export const store = createStore(CardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(() => { console.log('LOL', store.getState()) })