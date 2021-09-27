import './App.css';
import React from 'react';
import ActionButton from './components/ActionButton.jsx';
import Rechnen from './components/Rechnen.jsx';
import Verdoppeln from './components/Verdoppeln.jsx';



function App() {

  return (
    <React.Fragment>
      <div>Hi there! Oh yeah es funktionuggelt yaaahhhh!!!</div>
      <ActionButton />
      <Rechnen />
      <Verdoppeln />
    </React.Fragment>
  )
}

export default App;
