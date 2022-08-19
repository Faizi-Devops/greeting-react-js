import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let currenttime = new Date();
  let newimme=currenttime.getHours();
 let greting = ""
  if(newimme>=1 && newimme<12)
  {
   greting="Good Morning";

  }
  else if(newimme>=12 && newimme<19){
    greting="Good Afternoon";

  }
  else{
    greting="Good Night";
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello sir {greting}</h1>
      </header>
    </div>
  );
}

export default App;
