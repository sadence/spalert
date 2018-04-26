import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Banner from './Components/Banner';
import NewAlert from './Components/NewAlert';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <Banner/>
        <Router>
          <Route path="/newAlert" component={NewAlert} />
        </Router>
      </div>
    );
  }
}

export default App;
