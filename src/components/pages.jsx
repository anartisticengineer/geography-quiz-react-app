import React, { Component } from "react";
import questionData from "../questions.json";
import Question from "./questionScreen";
import Results from "./resultsScreen";

const Pages = (props) => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const questionPages = pageNumbers.map((i) => (
    <Question question={questionData["q" + i.toString()]} />
  ));
  const resultScreen = <Results />;
  return <div>{questionPages[props.currentPage]}</div>;
};

export default Pages;
