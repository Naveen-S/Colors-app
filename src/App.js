import React from 'react';
import './App.css';
import Palette from './Palette';
import SeedColors from './seedcolors';
import generatePalette from './colorHelpers';

function App() {
  return (
    <div className="App">
      <Palette  palette={generatePalette(SeedColors[7])}/>
    </div>
  );
}

export default App;
