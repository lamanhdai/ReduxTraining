import React from 'react';
import './App.css';
import {store} from './store'
import {User} from './components/User'
import {ButtonGroup} from './components/ButtonGroup'

function App() {
  return (
    <div className="App">
      <User {...store.getState().account} />
      <ButtonGroup />
    </div>
  );
}

export default App;
