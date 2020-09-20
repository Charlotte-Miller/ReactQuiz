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

let currentStyle = 0;

const AnswerDisplay: React.FC<Props> = ({
  answers,
  userAnswer,
  callback,
}: Props) => (
  <div className="answers-wrapper">
    {answers.map((answer) =>
    {
      // change animation style of eacch answer's button
      if (currentStyle > 4)
      {
        currentStyle = 0;
      }
      currentStyle += 1;

      return (
        <div key={answer}>
          <button
            disabled={!!userAnswer}
            value={answer}
            onClick={callback}
            type="button"
            className="answer-wrapper"
          >
            <div className={`btn style-${currentStyle}`}>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
          </button>
        </div>
      );
    })}
  </div>
);

export default AnswerDisplay;
