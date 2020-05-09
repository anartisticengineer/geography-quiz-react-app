import React, { Component } from "react";

class Question extends Component {
  state = {
    chosenAnswer: "",
  };
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate() {
    document.addEventListener("click", this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  handleClick = (event) => {
    //console.log(event.name);
    event.preventDefault();
    console.log(event.target.id);
  };
  render() {
    return (
      <div className="bg-dark text-light p-3">
        <h3 className="text-center pb-2">{this.props.question}</h3>
        {/*Render the answers dynamically via list */}
        {/*Another option */}
        <div
          className="d-flex flex-wrap justify-content-center btn-group-toggle"
          data-toggle="buttons"
        >
          {this.props.answers.map((q, index) => (
            <button
              type="button"
              key={index}
              name={"button-" + index}
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
