import React from 'react';
import './App.css';
import Palette from './Palette';
import SeedColors from './seedcolors';

function App() {
  return (
    <div className="App">
      <Palette  {...SeedColors[7]}/>
    </div>
  );
}

export default App;
