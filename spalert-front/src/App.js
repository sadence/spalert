import React, { Component } from 'react';

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
        <NewAlert/>
      </div>
    );
  }
}

export default App;
