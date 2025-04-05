import React from "react";
import { Button } from "@/components/ui/Button ";

const QuestionCard = ({ question, options, handleAnswer }) => {
  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{question}</h2>
      <div className="flex flex-col space-y-3">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full bg-blue-500 text-white hover:bg-blue-600"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
