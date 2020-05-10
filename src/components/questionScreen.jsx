import React, { Component } from "react";

class Question extends Component {
  state = {
    chosenAnswer: "",
    correctAnswer: false,
  };
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  handleClick = (event) => {
    event.preventDefault();
    //console.log(event.target.name);
    this.setState({ chosenAnswer: event.target.name });
    const yourAnswer = this.state.chosenAnswer;
    const correctAnswer = this.props.question["correct"];
    this.setState({ correctAnswer: yourAnswer === correctAnswer });
  };

  render() {
    return (
      <div className="bg-dark text-light p-3">
        <h3 className="text-center pb-2">{this.props.question["question"]}</h3>
        {/*Render the answers dynamically via list */}
        {/*Another option */}
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
