/* eslint-disable react/no-danger */
import React from 'react';
// types
import { AnswerObject } from '../App';
// styles
import '../styles/QuestionCard.scss';
// components
import AnswerDisplay from './AnswerDisplay';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void
  userAnswer: AnswerObject | undefined;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
}: Props) => (
  <div className="card">

    <div className="card__side card__side--back">
      <AnswerDisplay answers={answers} userAnswer={userAnswer} callback={callback} />
    </div>

    <div className="card__side card__side--front">
      <div className="card__theme">
        <div className="card__theme-box">
          <p className="card__subject" dangerouslySetInnerHTML={{ __html: question }} />
        </div>
      </div>
    </div>

  </div>
);

export default QuestionCard;
