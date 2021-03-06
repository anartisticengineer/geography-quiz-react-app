import React, { Component } from "react";
import Pages from "./pages";

class Main extends Component {
  state = {
    currentPage: 0,
    showResults: false,
  };
  componentDidMount() {
    document.addEventListener("submit", this.handleSubmit);
  }
  componentWillUnmount() {
    document.removeEventListener("submit", this.handleSubmit);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target.id);
    this.setState({ showResults: true });
  };

  goBack = () => {
    const prevPage =
      this.state.currentPage <= 0 ? 0 : this.state.currentPage - 1;
    this.setState({ currentPage: prevPage });
  };
  goForward = () => {
    const nextPage =
      this.state.currentPage >= 11 ? 11 : this.state.currentPage + 1;
    this.setState({ currentPage: nextPage });
  };
  render() {
    return (
      /*Putting the navigation buttons here (Might make this a separate class later?)*/
      <React.Fragment>
        <Pages
          currentPage={this.state.currentPage}
          showResults={this.state.showResults}
        />
        {/*Navbar component*/}
        <footer>
          <div className="d-flex justify-content-around bg-secondary p-3">
            {this.state.currentPage > 0 && (
              <button
                className="btn btn-light my-3"
                id="prev-btn"
                onClick={this.goBack}
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className="btn btn-light my-3"
              id="submit-btn"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            <button
              className="btn btn-light my-3"
              id="next-btn"
              onClick={this.goForward}
            >
              Next
            </button>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Main;
