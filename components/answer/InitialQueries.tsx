import React from 'react';
import { IconPlus } from '@/components/ui/icons';

interface InitialQueriesProps {
  questions: string[];
  handleFollowUpClick: (question: string) => void;
}

const InitialQueries = ({ questions, handleFollowUpClick }: InitialQueriesProps) => {
  const handleQuestionClick = (question: string) => {
    handleFollowUpClick(question);
  };
  
  return (
    <div className="">
      <div className="flex items-center">
      </div>
      <ul className="mt-2">
        {questions.map((question, index) => (
          <li
            key={index}
            className="flex items-center cursor-pointer  bg-white shadow-lg rounded-lg p-4 my-2"
            onClick={() => handleQuestionClick(question)}
          >
            <span role="img" aria-label="link" className="mr-2  text-black">
              <IconPlus />
            </span>
            <p className=" block sm:inline text-md sm:text-lg font-semibold  text-black">{question}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InitialQueries;