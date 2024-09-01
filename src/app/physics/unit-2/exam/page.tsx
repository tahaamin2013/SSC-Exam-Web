'use client'

import { useState } from 'react';

const questions = [
  { id: 1, question: "Define Kinematics.", answer: "Kinematics is the branch of mechanics concerned with the motion of objects without considering the forces causing the motion." },
  { id: 2, question: "Define Dynamics.", answer: "Dynamics is the branch of mechanics that deals with the forces and their effect on the motion of objects." },
  { id: 3, question: "Differentiate between Kinematics and Dynamics.", answer: "Kinematics studies motion without regard to forces, while Dynamics studies the forces that cause or affect motion." },
  { id: 4, question: "How would you define rest?", answer: "Rest is the state of an object when it does not change its position with respect to a reference point." },
  { id: 5, question: "How would you define motion?", answer: "Motion is the change in position of an object with respect to a reference point." },
  { id: 6, question: "What is meant by displacement?", answer: "Displacement is the shortest distance between the initial and final positions of an object, including direction." },
  { id: 7, question: "Define acceleration.", answer: "Acceleration is the rate at which an object&apos;svelocity changes over time." },
  { id: 8, question: "Define Uniform Velocity.", answer: "Uniform velocity is when an object covers equal distances in equal intervals of time in a straight line." },
  { id: 9, question: "What is average speed?", answer: "Average speed is the total distance traveled divided by the total time taken." },
  { id: 10, question: "Differentiate between circular motion and rotatory motion.", answer: "Circular motion involves moving along a circular path, while rotatory motion involves rotating around a fixed axis." },
  { id: 11, question: "What is instantaneous speed?", answer: "Instantaneous speed is the speed of an object at a particular moment in time." },
  { id: 12, question: "Define Vibratory motion.", answer: "Vibratory motion is a type of oscillatory motion where an object moves back and forth around a fixed point." },
  { id: 13, question: "What is Position?", answer: "Position is the location of an object relative to a reference point." },
  { id: 14, question: "How can we say that rest and motion are relative states?", answer: "Rest and motion are relative because they depend on the observer&apos;sframe of reference." },
  { id: 15, question: "Define Kinematics.", answer: "Kinematics is the study of motion without considering the forces that cause it." },
  // Multiple-choice questions
  { id: 16, question: "Study of motion without the reference of force and motion is called:", options: ["Light", "Kinematics", "Atomic physics", "Mechanics"], correctAnswer: "Kinematics" },
  { id: 17, question: "When each point of a body moves around a fixed point or axis, the motion of the body is known as:", options: ["Translatory", "Vibratory", "Rotatory", "None of these"], correctAnswer: "Rotatory" },
  { id: 18, question: "The shortest distance between two points is known as:", options: ["Velocity", "Displacement", "Speed", "Distance"], correctAnswer: "Displacement" },
  { id: 19, question: "If the velocity of the body is increasing, then its acceleration will be:", options: ["Positive", "Negative", "Uniform", "Variable"], correctAnswer: "Positive" },
  { id: 20, question: "The quantity which can be described by a number, with a suitable unit only, is called:", options: ["Vector", "Scalar", "Speed", "Acceleration"], correctAnswer: "Scalar" },
  { id: 21, question: "In equations of motion, quantities opposite to the direction of initial velocity are taken as:", options: ["Positive", "Negative", "Variable", "Uniform"], correctAnswer: "Negative" },
  { id: 22, question: "The velocity and acceleration of a body moving with uniform speed in a circular path will be:", options: ["In the same direction", "In the opposite direction", "Mutually perpendicular", "Equal"], correctAnswer: "Mutually perpendicular" },
  { id: 23, question: "The SI unit of acceleration is:", options: ["m/s", "km/h", "km/s²", "m/s²"], correctAnswer: "m/s²" },
  { id: 24, question: "The free fall of bodies under gravity is an example of motion with:", options: ["Uniform acceleration", "Uniform velocity", "Uniform speed", "Variable acceleration"], correctAnswer: "Uniform acceleration" },
  { id: 25, question: "At maximum height, velocity is zero and acceleration is:", options: ["Zero", "Positive", "Negative", "Variable"], correctAnswer: "Negative" },
];

const ExamPage = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: string }>({});

  const handleChange = (id: number, value: string) => {
    setAnswers({ ...answers, [id]: value });
  };

  const checkAnswers = () => {
    const newFeedback: { [key: number]: string } = {};
    questions.forEach(q => {
      if (q.options) {
        newFeedback[q.id] = answers[q.id] === q.correctAnswer ? "Correct" : "Incorrect";
      } else {
        newFeedback[q.id] = answers[q.id] === q.answer ? "Correct" : "Incorrect";
      }
    });
    setFeedback(newFeedback);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Physics Exam</h1>
      <form>
        {questions.map((q) => (
          <div key={q.id} className="mb-6">
            <label className="block text-lg font-medium mb-2">{q.question}</label>
            {q.options ? (
              <div>
                {q.options.map(option => (
                  <label key={option} className="block text-md font-medium mb-1">
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={option}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <textarea
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md"
                value={answers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder="Type your answer here..."
              />
            )}
            <p className="mt-1 text-sm text-gray-500">Your Answer: {feedback[q.id]}</p>
          </div>
        ))}
        <button
          type="button"
          onClick={checkAnswers}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Check Answers
        </button>
      </form>
    </div>
  );
};

export default ExamPage;
