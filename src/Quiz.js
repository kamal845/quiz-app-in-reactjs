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
  const [score,setScore]=useState(0);
  const handleClick=(option)=>{
    setCurrentClickAnswer(option)
    if(option === questions[currentQuestion].answer){
        setScore(score +1);
    }
  }
  const nextQuestion=()=>{
    setCurrentQuestion(currentQuestion + 1);
    setCurrentClickAnswer(null);
  }
  return (
     <>
      {currentQuestion < questions.length ? (
        <>
          <h2>ReactJS Quiz App</h2>
          <Questionlist
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            handleClick={handleClick}
            currentClickAnswer={currentClickAnswer}
          />
          <button onClick={nextQuestion}>Next Question</button>
          <div>your score is {score}</div>
        </>
      ) : (
        <h2>Quiz Complete</h2>
      )}
    </>
  );
};

export default Quiz;
