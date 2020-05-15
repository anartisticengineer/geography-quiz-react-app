// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import questionData from "../questions.json";
import TitleScreen from "./titleScreen";
import Question from "./questionScreen";
import Results from "./resultsScreen";

const Pages = (props) => {
  const titleScreen = <TitleScreen />;
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const questionPages = pageNumbers.map((i) => (
    <Question question={questionData["q" + i.toString()]} />
  ));
  const resultScreen = <Results />;
  return (
    <div>
      {/*0: intro, 1-10: questionPage */}
      {props.currentPage === 0
        ? titleScreen
        : props.showResults
        ? resultScreen
        : questionPages[props.currentPage]}
    </div>
  );
};

export default Pages;
