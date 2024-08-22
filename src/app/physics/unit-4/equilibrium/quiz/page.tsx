'use client';
import React, { useState } from 'react';
import { quiz } from './data';

interface Result {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

interface AnswerRecord {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const Page: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<Result>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [answersRecord, setAnswersRecord] = useState<AnswerRecord[]>([]);

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    const isCorrect = selectedAnswer === correctAnswer;
    setAnswersRecord((prev) => [
      ...prev,
      {
        question: questions[activeQuestion].question,
        selectedAnswer: selectedAnswer,
        correctAnswer,
        isCorrect,
      },
    ]);

    setResult((prev) =>
      isCorrect
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
        : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }

    setChecked(false);
    setSelectedAnswer('');
    setSelectedAnswerIndex(null);
  };

  const progress = ((activeQuestion + 1) / questions.length) * 100;
  const passScore = questions.length * 5 * 0.7;
  const isPass = result.score >= passScore;

  const retakeQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswer('');
    setChecked(false);
    setSelectedAnswerIndex(null);
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
    setAnswersRecord([]);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full mx-auto bg-white rounded-lg shadow-xl overflow-hidden'>
        <div className='p-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>Quiz Challenge</h1>
          {!showResult ? (
            <>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl text-gray-700'>
                  Question: {activeQuestion + 1}/{questions.length}
                </h2>
                <div className='text-2xl font-bold text-red-500'>timeLefts</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="h-2.5 rounded-full bg-green-500" style={{ width: `${progress}%` }}></div>
              </div>
              <div key={activeQuestion} className='bg-gray-50 p-6 rounded-lg shadow-inner'>
                <h3 className='text-xl text-gray-800 mb-4'>{question}</h3>
                <ul className='space-y-3'>
                  {answers.map((answer, idx) => (
                    <li
                      key={idx}
                      onClick={() => onAnswerSelected(answer, idx)}
                      className={`cursor-pointer p-4 rounded-lg transition-colors duration-300 
                        ${selectedAnswerIndex === idx
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'}`}
                    >
                      {answer}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={nextQuestion}
                disabled={!checked}
                className={`w-full mt-6 p-4 text-lg rounded-lg transition-colors duration-300
                  ${checked
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              >
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </>
          ) : (
            <div className='bg-gray-50 p-6 rounded-lg shadow-inner'>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>Quiz Results</h3>
              <div className={`text-4xl font-bold text-center mb-6 ${isPass ? 'text-green-500' : 'text-red-500'}`}>
                {isPass ? 'Pass!' : 'Try Again!'}
              </div>
              <div className='space-y-2 mb-6'>
                <p>Overall Score: <span className='font-bold'>{(result.score / (questions.length * 5)) * 100}%</span></p>
                <p>Total Questions: <span className='font-bold'>{questions.length}</span></p>
                <p>Correct Answers: <span className='font-bold text-green-500'>{result.correctAnswers}</span></p>
                <p>Wrong Answers: <span className='font-bold text-red-500'>{result.wrongAnswers}</span></p>
              </div>
              <h4 className='text-xl font-bold text-gray-800 mb-4'>Review Answers:</h4>
              <ul className='space-y-4'>
                {answersRecord.map((record, idx) => (
                  <li key={idx} className='bg-white p-4 rounded-lg shadow'>
                    <p className='font-bold mb-2'>{record.question}</p>
                    <p>Your Answer: <span className={record.isCorrect ? 'text-green-500' : 'text-red-500'}>{record.selectedAnswer}</span></p>
                    {!record.isCorrect && <p>Correct Answer: <span className='text-green-500'>{record.correctAnswer}</span></p>}
                  </li>
                ))}
              </ul>
              <button
                onClick={retakeQuiz}
                className='w-full mt-6 p-4 text-lg rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300'
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
