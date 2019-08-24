import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  state = {
    persons: [
      { name: "CoderApex", age: 30 },
      { name: "Fozzy", age: 1 },
      { name: "Stephan", age: 25 }
    ],
    clickCount: 0
  };

  switchNameHandler = evt => {
    // console.log("Click Event Triggered - Change Name Button");
    // console.log(evt);

    let newCount = this.state.clickCount + 1;

    this.setState({
      clickCount: newCount
    });

    if (newCount % 2 == 0) {
      this.setState({
        persons: [
          { name: "CoderApex", age: 29 },
          { name: "Fozzy", age: 1 },
          { name: "Stephan", age: 25 }
        ]
      });
    } else {
      this.setState({
        persons: [
          { name: "Aamir Abbas", age: 30 },
          { name: "Fozzy", age: 1 },
          { name: "Stephan", age: 25 }
        ]
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>

        <button onClick={this.switchNameHandler}>Switch Name</button>
        <h6>Click Count : {this.state.clickCount}</h6>

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
