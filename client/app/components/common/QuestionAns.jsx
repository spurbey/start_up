"use client";
import React, { useState } from "react";

const QuestionAns = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question-ans-container">
      <h3 className="question" onClick={toggleAnswer}>
        {question}
      </h3>
      {showAnswer && <p className="answer">{answer}</p>}
    </div>
  );
};

export default QuestionAns;
