/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { fetchQuestions } from './API';
// components
import QuestionCard from './components/QuestionCard';
import Heading from './components/Heading';
import StartButton from './components/StartButton';
import ScoreAndQuestionRate from './components/ScoreAndQuestionRate';
import Loading from './components/Loading';
// types
import { Difficulty, QuestionState } from './API';
// styles
import './styles/App.css';
import './styles/Normalize.css';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTION = 10;

const App: React.FC = () =>
{
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () =>
  {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTION, Difficulty.EASY);
    setQuestions(newQuestions);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const nextQuestion = () =>
  {
    // move on to the next question if it's not the last
    const nextQuestionNumber = number + 1;

    if (nextQuestionNumber === TOTAL_QUESTION)
    {
      setGameOver(true);
    }
    else
    {
      setNumber(nextQuestionNumber);
    }
  };

  const checkAnswerThenNext = (e: React.MouseEvent<HTMLButtonElement>) =>
  {
    if (!gameOver)
    {
      // users answer
      const answer = e.currentTarget.value;

      // check answer against  correct answer
      const correct = questions[number].correct_answer === answer;

      // add 1 to score if correct
      if (correct) setScore((previousValue) => previousValue + 1);

      // save answer to the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);

      nextQuestion();
    }
  };

  return (
    <div className="container">

      <Heading />

      {/* loadind */}
      {loading && <Loading />}

      {/* start button */}
      {(gameOver || userAnswers.length === TOTAL_QUESTION) && (
      <StartButton text={userAnswers.length === TOTAL_QUESTION ? 'Restart' : 'Start'} clickHandle={startTrivia} />
      )}

      {/* score and question rate */}
      {(!loading && !gameOver || userAnswers.length === TOTAL_QUESTION) && (
      <ScoreAndQuestionRate
        score={score}
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTION}
      />
      )}

      {/* question display */}
      {!loading && !gameOver && (
      <QuestionCard
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswerThenNext}
      />
      )}

      {/* next question button */}
      {!gameOver
        && !loading
        && userAnswers.length === number + 1
        && number !== TOTAL_QUESTION - 1 && (
          <button className="next" onClick={nextQuestion} type="button">
            Next Question
          </button>
      )}

    </div>
  );
};

export default App;
