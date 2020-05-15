import React, { Component } from "react";

class Question extends Component {
  state = {
    chosenAnswer: "",
    correctAnswer: false,
  };
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }

  handleClick = (event) => {
    event.preventDefault();

    const yourAnswer = this.state.chosenAnswer;
    const correctOne = this.props.question["correct"];
    this.setState({
      chosenAnswer: event.target.name,
      correctAnswer: yourAnswer === correctOne,
    });
  };

  render() {
    return (
      <div className="bg-dark text-light p-3">
        <h3 className="text-center pb-2">{this.props.question["question"]}</h3>
        {/*Render the answers dynamically via list */}
        <div
          className="d-flex flex-wrap justify-content-center btn-group-toggle"
          data-toggle="buttons"
        >
          {this.props.question["answers"].map((q, index) => (
            <button
              type="button"
              key={index}
              name={q}
              id={"answer-" + index}
              className="btn btn-outline-light btn-block"
              onClick={this.handleClick}
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
