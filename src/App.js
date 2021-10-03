import './App.css';
import React from 'react';
import ActionButton from './components/ActionButton.jsx';
import Rechnen from './components/Rechnen.jsx';
import Verdoppeln from './components/Verdoppeln.jsx';
import Temperaturen from './components/Temperaturen.jsx';
import { BrowserRouter, Link, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <div className='ui container'>

          <div className='ui menu'>
            <div className="header item">Toolbar</div>
              <Link to='/start' className="item">Startseite</Link>
              <Link to='/important' className="item">Important!</Link>
              <Link to='/actionButton' className="item">Action Button</Link>
              <Link to='/rechnen' className="item">Rechnen</Link>
              <Link to='/verdoppeln' className="item">Verdoppeln</Link>
              <Link to='/temperaturen' className="item">Temperaturen</Link>
          </div>

          <div className="ui segment">
            <Route path='/start'>
              <h1>Startseite</h1>
              <div className="ui raised segment">Willkommen auf der Seite!</div>
            </Route>

            <Route path='/important'>
              <h1>Important Seite!!</h1>
              <div className="ui raised segment">Important Message: Hi there! Oh yeah es funktionuggelt yaaahhhh!!!</div>
            </Route>
            
            <Route path='/actionButton'>
              <h1>Action Buttons!</h1>
              <div className="ui raised segment"><ActionButton /></div>
            </Route>

            <Route path='/rechnen'>
              <h1>Rechnen!</h1>
              <div className="ui raised segment"><Rechnen /></div>
            </Route>

            <Route path='/verdoppeln'>
              <h1>Verdoppeln!</h1>
              <div className="ui raised segment"><Verdoppeln /></div>
            </Route>

            <Route path='/temperaturen'>
              <h1>Temperaturen!</h1>
              <div className="ui raised segment"><Temperaturen /></div>
            </Route>
            {/* <div className="ui raised segment">Important Message: Hi there! Oh yeah es funktionuggelt yaaahhhh!!!</div>
            <div className="ui raised segment"><ActionButton /></div>
            <div className="ui raised segment"><Rechnen/></div>
            <div className="ui raised segment"><Verdoppeln/></div>
            <div className="ui raised segment"><Temperaturen/></div> */}
          </div>

        </div>
      </React.Fragment>
    </BrowserRouter>
  );
  //Um Router zu benutzen, verschiednes runterladen
  //localStorage??!!!??!?!?!
}

export default App;
