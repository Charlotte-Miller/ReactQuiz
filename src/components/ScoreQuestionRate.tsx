import React from 'react';
// styles
import '../styles/ScoreQuestionRate.css';

type Props = {
  questionNumber: number;
  totalQuestions: number;
  score: number;
};

const ScoreQuestionRate: React.FC<Props> = ({ questionNumber, totalQuestions, score }: Props) => (
  <div className="score-question-rate">
    <a href="#" className="btn">
      <span className="text">Text</span>
      <span className="flip-front">{`Score: ${score}`}</span>
      <span className="flip-back">{`Question: ${questionNumber}/${totalQuestions}`}</span>
    </a>
  </div>
);

export default ScoreQuestionRate;
