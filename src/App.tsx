import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UpDownCounter } from './Components/UpDownCounter';

function App() {
  return (
    <div className="App">

      <UpDownCounter />
      <UpDownCounter />
      <UpDownCounter />
    </div>
  );
}

export default App;
