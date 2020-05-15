import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";

class App extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
