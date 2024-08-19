import React from "react";

const Questionlist = ({ question, options,handleClick,currentClickAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index)=> (
          <li key={index} onClick={()=>handleClick(option)} className={currentClickAnswer===option ? 'selected' :' '}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questionlist;
