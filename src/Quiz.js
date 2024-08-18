import React, { useState } from "react";
import Questionlist from "./QuestionList";
const Quiz = () => {
  const questions = [
    {
      question: "what is reactJs ?",
      options: [
        "css framework",
        "js library",
        "programming language",
        "java framework",
      ],
      answer: "js library",
    },
    {
        question: "what is reactJs ?",
        options: [
          "css framework",
          "js library",
          "programming language",
          "java framework",
        ],
        answer: "js library",
      },
      {
        question: "what is javascript used for ?",
        options: [
          "only frontend",
          "only backend",
          "used for both frontend and backend",
          "used for none",
        ],
        answer: "used for both frontend and backend",
      },
      {
        question: "what is html full form ?",
        options: [
          "hypertext markup language",
          "hypertext makeup language",
          "hypertext mineup language",
          "none of these",
        ],
        answer: "hypertext markup language",
      },
      {
        question: "what is css fullform ?",
        options: [
          "cascade style swift",
          "cascade style shift",
          "cascading style sheet",
          "All the above",
        ],
        answer: "cascading style sheet",
      },
      {
        question: "what is 2 + 2 ?",
        options: [
          "4",
          "6",
          "7",
          "All the above",
        ],
        answer: "4",
      },

  ];
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [currentClickAnswer,setCurrentClickAnswer]=useState(null);
  return (
    <>
      <h2>ReactJS Quiz App</h2>
      {/* question list component mai props pass karenge question aur questions ek array hai*/}
    <Questionlist question={questions[currentQuestion].question}
    options={questions[currentQuestion].options}/>
    <button>Next question</button>
    </>
  );
};

export default Quiz;
