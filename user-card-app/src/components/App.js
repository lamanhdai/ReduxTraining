import React from 'react';
import './App.css';
import {Introduction} from './Introduction'
import {UserDetail} from './UserDetail'

function App() {
  return (
    <div className="App">
      <div class="Card">
        <div className="Photo">
          <img src={'./coat.jpg'} alt={'coat'} />
        </div>
        <div className="Detail">
         <Introduction label="I am" text="abc"/>
         <Introduction label="I like" text="xyz"/>
         <hr className="Divider"/>
         <UserDetail label="Name:" text="xyz"/>
         <UserDetail label="Location:" text="xyz"/>
        </div>
      </div>
    </div>
  );
}

export default App;
