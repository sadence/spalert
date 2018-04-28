import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Banner from './Components/Banner';
import NewAlert from './Components/NewAlert';
import ListAlerts from './Components/ListAlerts';
import BrigadeAlerts from './Components/BrigadeAlerts';

import './App.css';

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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
