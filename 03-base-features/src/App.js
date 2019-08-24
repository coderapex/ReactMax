import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  state = {
    persons: [
      { name: "CoderApex", age: 30 },
      { name: "Fozzy", age: 1 },
      { name: "Stephan", age: 25 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          I'm just a baby!
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
