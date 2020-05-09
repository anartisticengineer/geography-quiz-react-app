import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import questionData from "./questions.json";
import Question from "./components/questionScreen";
import Results from "./components/resultsScreen";

class App extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Question
          question={questionData["q1"]["question"]}
          answers={questionData["q1"]["answers"]}
        />
      </React.Fragment>
    );
  }
}

export default App;
