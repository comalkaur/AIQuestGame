import React, { useState } from "react";
import { motion } from 'framer-motion';
import Questioncard from '../components/ui/Button'; // Correct import
//import QuestionCard from '../components/ui/Questioncard';
import ProgressChart from '../components/ui/ProgressChart';
//import HintButton from '../components/ui/HintButton';
//import NextButton from '../components/ui/NextButton';
import { questions } from '../cUtils/questions';
//import Button from '../components/ui/uButton';
import Button from '../components/ui/Button'; // Adjust the path based on your file structure
// In HintButton.jsx
import HintButton from '../components/ui/Button'; // Correct import

// In NextButton.jsx
import NextButton from '../components/ui/Button'; // Correct import

// In Questioncard.jsx
//import  Questioncard from '../components/ui/Button'; // Correct import
import Gamecard from '../components/ui/Button'; // Correct import



const HistoryPuzzleGame = () => {
  const [hint, setHint] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState([0]);

  const handleHint = () => {
    setHint(questions[questionIndex].hint);
  };

  const handleAnswer = (option) => {
    if (option === questions[questionIndex].answer) {
      setScore(score + 10);
      setProgress([...progress, score + 10]);
    }
    handleNext();
  };

  const handleNext = () => {
    setHint("");
    setQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <QuestionCard
          question={questions[questionIndex].question}
          options={questions[questionIndex].options}
          handleAnswer={handleAnswer}
        />
        {hint && <p className="mt-4 text-gray-600 text-sm">💡 Hint: {hint}</p>}
        <div className="flex justify-between items-center mt-6">
          <HintButton handleHint={handleHint} />
          <NextButton handleNext={handleNext} />
        </div>
      </motion.div>
      <ProgressChart progress={progress} />
    </div>
  );
};

export default HistoryPuzzleGame;