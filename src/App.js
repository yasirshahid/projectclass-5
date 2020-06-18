import React, { createContext } from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {
  return (
    <CounterContext.Provider value={50}>
    <div className="App">
     <Parent/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
