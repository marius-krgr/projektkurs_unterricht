import './App.css';
import React from 'react';
import ActionButton from './components/ActionButton.jsx';
import Rechnen from './components/Rechnen.jsx';
import Verdoppeln from './components/Verdoppeln.jsx';
import Temperaturen from './components/Temperaturen.jsx';


function App() {

  return (
    <React.Fragment>
      <div className="ui container">
        <div>Hi there! Oh yeah es funktionuggelt yaaahhhh!!!</div>
        <div className="ui raised segment"><ActionButton /></div>
        <div className="ui raised segment"><Rechnen/></div>
        <div className="ui raised segment"><Verdoppeln/></div>
        <div className="ui raised segment"><Temperaturen/></div>
      </div>
    </React.Fragment>
  )
  //Um Router zu benutzen, verschiednes runterladen
  //localStorage??!!!??!?!?!
}

export default App;
