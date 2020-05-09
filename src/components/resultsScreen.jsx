import React, { Component } from "react";

const Results = (props) => {
  return (
    <div>
      <h2>You got {props.numCorrect * 10} %!</h2>
      <h3>
        {props.numCorrect <= 5
          ? "You suck lol"
          : props.numCorrect === 10
          ? "Perfect!"
          : "Not bad"}
      </h3>
    </div>
  );
};

export default Results;
