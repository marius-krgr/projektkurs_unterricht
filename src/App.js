import './App.css';
import React from 'react';
import ActionButton from './components/ActionButton.jsx';
import Rechnen from './components/Rechnen.jsx';
import Aufgabe1 from './components/Aufgabe1.jsx';



function App() {

  return (
    <React.Fragment>
      <div>Hi there! Oh yeah es funktionuggelt yaaahhhh!!!</div>
      <ActionButton />
      <Rechnen />
      <Aufgabe1 />
    </React.Fragment>
  )
}

export default App;
