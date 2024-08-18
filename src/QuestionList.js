import React from "react";

const Questionlist = ({ question, options }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index)=> (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questionlist;
