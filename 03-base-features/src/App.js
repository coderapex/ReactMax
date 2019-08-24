import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <Person name="CoderApex" age="30" />
        <Person name="Fozzy" age="1">
          I'm just a baby!
        </Person>
      </div>
    );
  }
}

export default App;
