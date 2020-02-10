import React, { Component } from "react";
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => this.setState({ smurfs: res.data }))
    .catch(err => console.log(err));
  }

  
  render() {
    return (
      <SmurfContext.Provider value={this.state.smurfs}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </div>
      </SmurfContext.Provider>
    );
  }
}

export default App;
