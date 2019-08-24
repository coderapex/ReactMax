import React from "react";

// Functional component with simple JSX Expresstion
// const person = () => {
//   return <p>I am a Person. My age is {Math.floor(Math.random() * 30)}</p>;
// };

// Functional component using prop values
const person = props => {
  return (
    <div>
      <p>
        My name is {props.name}. My age is {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
