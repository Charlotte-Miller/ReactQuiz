import React from 'react';
// styles
import '../styles/ScoreAndQuestionRate.css';

type Props = {
  questionNumber: number;
  totalQuestions: number;
  score: number;
};

const ScoreAndQuestionRate: React.FC<Props> = (
  { questionNumber, totalQuestions, score }: Props,
) => (
  <div className="score-question-rate-wrapper">
    <a href="#" className="score-question-rate">
      {/* <span className="text">Text</span> */}
      <span className="flip-front">{`Score: ${score}`}</span>
      <span className="flip-back">{`Question: ${questionNumber}/${totalQuestions}`}</span>
    </a>
  </div>
);

export default ScoreAndQuestionRate;
