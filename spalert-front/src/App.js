import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Banner from './Components/Banner';
import NewAlert from './Components/NewAlert';
import Edit from './Components/EditAlert';
import ListAlerts from './Components/ListAlerts';
import BrigadeAlerts from './Components/BrigadeAlerts';

import './App.css';
import EditAlert from './Components/EditAlert';

function Menu(){
  return(
    <div>
      <ul>
        <li><Link to="/newAlert">New Alert</Link></li>
        <li><Link to="/alerts">Edit Alerts</Link></li>
        <li><Link to="/brigade">Brigade Alerts</Link></li>
      </ul>
    </div>
  );
}

function Success() {
  return <h2>Your alert has been submitted. Thank you!</h2>
}

class App extends Component {

  render() {
    return (
      <div>
        <Banner/>
        <Router>
          <div>
            <Route exact path="/" component={Menu}/>
            <Route path="/newAlert" component={NewAlert}/>
            <Route path="/alerts" component={ListAlerts}/>
            <Route path="/brigade" component={BrigadeAlerts}/>
            <Route path="/success" component={Success}/>
            <Route path="/edit/:id" component={EditAlert}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
