/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// types
import { AnswerObject } from '../App';
// styles
import '../styles/AnswerDisplay.css';

type Props = {
  answers: string[];
  userAnswer: AnswerObject | undefined;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AnswerDisplay: React.FC<Props> = ({
  answers,
  userAnswer,
  callback,
}: Props) => (
  <div className="answers-wrapper">
    {answers.map((answer) => (
      <div key={answer}>
        <button
          disabled={!!userAnswer}
          value={answer}
          onClick={callback}
          type="button"
          className="answer"
        >
          <span className="answer__content" dangerouslySetInnerHTML={{ __html: answer }} />
          <span className="answer__glitch" />
          <span className="answer__label">r48</span>
        </button>
      </div>
    ))}
  </div>
);

export default AnswerDisplay;
