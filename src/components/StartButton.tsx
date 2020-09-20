/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// styles
import '../styles/StartButton.scss';

type Props =
{
    text: string;
    clickHandle: () => void;
}

const StartButton: React.FC<Props> = ({ text, clickHandle }: Props) => (
  <div className="button-wrapper">
    <a
      onClick={clickHandle}
      href="#"
      className="btn"
    >
      {text}
    </a>
  </div>
);

export default StartButton;
