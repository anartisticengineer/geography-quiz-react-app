import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import questionData from "./questions.json";
import Question from "./components/questionScreen";
import Results from "./components/resultsScreen";

class App extends Component {
  state = {
    currentPage: 1,
  };
  componentDidMount() {}

  render() {
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let questionPages = pageNumbers.map((i) => (
      <Question question={questionData["q" + i.toString()]} />
    ));
    return (
      <React.Fragment>
        {questionPages[this.state.currentPage]}
        {/*Putting the navigation buttons here (Might make this a separate class later)*/}
        <footer>
          <div className="d-flex justify-content-between bg-secondary p-5">
            <button className="btn btn-light btn-lg">Previous</button>
            <button className="btn btn-light btn-lg">Next</button>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
