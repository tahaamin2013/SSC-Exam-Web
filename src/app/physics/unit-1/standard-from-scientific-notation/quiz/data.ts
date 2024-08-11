export const quiz = {
  totalQuestions: 30,
  questions: [
    {
      id: 1,
      question: "What is the purpose of scientific notation?",
      answers: [
        "To represent very large or small numbers more conveniently",
        "To simplify mathematical operations only",
        "To replace numbers in physics equations",
        "To convert numbers to binary format",
      ],
      correctAnswer:
        "To represent very large or small numbers more conveniently",
    },
    {
      id: 2,
      question: "In scientific notation, what does the 'mantissa' refer to?",
      answers: [
        "The exponent",
        "A number less than 1",
        "A number greater than 1 and less than 10",
        "The base number",
      ],
      correctAnswer: "A number greater than 1 and less than 10",
    },
    {
      id: 3,
      question:
        "How is the width of the observable universe written in scientific notation?",
      answers: [
        "8.8 × 10^26 meters",
        "8.8 × 10^27 meters",
        "8.8 × 10^24 meters",
        "8.8 × 10^25 meters",
      ],
      correctAnswer: "8.8 × 10^26 meters",
    },
    {
      id: 4,
      question: "What is the general form of scientific notation?",
      answers: [
        "number = mantissa × 10^exponent",
        "number = base × 10^mantissa",
        "number = exponent × 10^mantissa",
        "number = mantissa + 10^exponent",
      ],
      correctAnswer: "number = mantissa × 10^exponent",
    },
    {
      id: 5,
      question:
        "How would you write the mass of Earth, which is 5,980,000,000,000,000,000,000,000 kg, in scientific notation?",
      answers: [
        "5.98 × 10^24 kg",
        "5.98 × 10^23 kg",
        "5.98 × 10^25 kg",
        "5.98 × 10^22 kg",
      ],
      correctAnswer: "5.98 × 10^24 kg",
    },
    {
      id: 6,
      question: "What does the exponent in scientific notation represent?",
      answers: [
        "The number of decimal places",
        "The power of ten",
        "The value of the mantissa",
        "The base unit",
      ],
      correctAnswer: "The power of ten",
    },
    {
      id: 7,
      question:
        "In scientific notation, how is the diameter of a hydrogen nucleus, approximately 0.0000000000000017 meters, written?",
      answers: [
        "1.7 × 10^-15 meters",
        "1.7 × 10^-16 meters",
        "1.7 × 10^-14 meters",
        "1.7 × 10^-13 meters",
      ],
      correctAnswer: "1.7 × 10^-15 meters",
    },
    {
      id: 8,
      question:
        "What is the mantissa in the scientific notation of 3.6 × 10^5?",
      answers: ["3.6", "10^5", "36", "5"],
      correctAnswer: "3.6",
    },
    {
      id: 9,
      question:
        "If a number in scientific notation is written as 7.2 × 10^8, what is the value of the exponent?",
      answers: ["7.2", "8", "10", "100"],
      correctAnswer: "8",
    },
    {
      id: 10,
      question: "How would you express 0.00052 in scientific notation?",
      answers: ["5.2 × 10^-4", "5.2 × 10^-3", "5.2 × 10^-2", "5.2 × 10^-5"],
      correctAnswer: "5.2 × 10^-4",
    },
    {
      id: 11,
      question:
        "Which of the following is true about the mantissa in scientific notation?",
      answers: [
        "It is always a number between 0 and 1",
        "It is always greater than 10",
        "It is always between 1 and 10",
        "It can be less than 1 or greater than 10",
      ],
      correctAnswer: "It is always between 1 and 10",
    },
    {
      id: 12,
      question: "What is the scientific notation for 0.00000000345?",
      answers: ["3.45 × 10^-9", "3.45 × 10^-8", "3.45 × 10^-7", "3.45 × 10^-6"],
      correctAnswer: "3.45 × 10^-9",
    },
    {
      id: 13,
      question:
        "If a number in scientific notation is written as 9.1 × 10^-6, what is the mantissa?",
      answers: ["9.1", "10^-6", "9.1 × 10^-6", "6"],
      correctAnswer: "9.1",
    },
    {
      id: 14,
      question: "How would you write 2,500,000 in scientific notation?",
      answers: ["2.5 × 10^6", "2.5 × 10^5", "2.5 × 10^4", "2.5 × 10^7"],
      correctAnswer: "2.5 × 10^6",
    },
    {
      id: 15,
      question: "Which number is represented by 4.5 × 10^3 in standard form?",
      answers: ["450", "4500", "45000", "45"],
      correctAnswer: "4500",
    },
    {
      id: 16,
      question: "How do you convert 6.7 × 10^2 to standard form?",
      answers: ["670", "67", "6.7", "67,000"],
      correctAnswer: "670",
    },
    {
      id: 17,
      question: "The scientific notation for 0.000076 is:",
      answers: ["7.6 × 10^-5", "7.6 × 10^-4", "7.6 × 10^-6", "7.6 × 10^-7"],
      correctAnswer: "7.6 × 10^-5",
    },
    {
      id: 18,
      question:
        "Which of the following is not a correct scientific notation for 0.09?",
      answers: ["9 × 10^-2", "0.9 × 10^-1", "90 × 10^-3", "9 × 10^-3"],
      correctAnswer: "9 × 10^-3",
    },
    {
      id: 19,
      question: "What is the scientific notation for 1,200,000,000,000?",
      answers: ["1.2 × 10^12", "1.2 × 10^11", "12 × 10^11", "1.2 × 10^13"],
      correctAnswer: "1.2 × 10^12",
    },
    {
      id: 20,
      question: "How would you write 0.00000000045 in scientific notation?",
      answers: ["4.5 × 10^-10", "4.5 × 10^-11", "45 × 10^-11", "4.5 × 10^-9"],
      correctAnswer: "4.5 × 10^-10",
    },
    {
      id: 21,
      question:
        "What is the exponent in the scientific notation of 2.4 × 10^7?",
      answers: ["7", "2.4", "10", "24"],
      correctAnswer: "7",
    },
    {
      id: 22,
      question: "What is the scientific notation for 8.0 × 10^-3?",
      answers: ["0.008", "0.08", "0.8", "8"],
      correctAnswer: "0.008",
    },
    {
      id: 23,
      question: "The number 0.000045 in scientific notation is:",
      answers: ["4.5 × 10^-5", "45 × 10^-6", "4.5 × 10^-6", "45 × 10^-5"],
      correctAnswer: "4.5 × 10^-5",
    },
    {
      id: 24,
      question: "What is the scientific notation for 500,000?",
      answers: ["5 × 10^5", "5 × 10^4", "50 × 10^4", "5 × 10^6"],
      correctAnswer: "5 × 10^5",
    },
    {
      id: 25,
      question:
        "Which of the following is the correct scientific notation for 0.0000009?",
      answers: ["9 × 10^-7", "9 × 10^-6", "0.9 × 10^-6", "0.09 × 10^-6"],
      correctAnswer: "9 × 10^-7",
    },
    {
      id: 26,
      question: "The scientific notation for 7,000,000 is:",
      answers: ["7 × 10^6", "7 × 10^5", "70 × 10^5", "7 × 10^7"],
      correctAnswer: "7 × 10^6",
    },
    {
      id: 27,
      question:
        "What is the mantissa in the scientific notation of 6.3 × 10^4?",
      answers: ["6.3", "10^4", "4", "63"],
      correctAnswer: "6.3",
    },
    {
      id: 28,
      question: "How would you convert 3.2 × 10^-8 to standard form?",
      answers: ["0.000000032", "0.0000000032", "0.00000032", "0.000032"],
      correctAnswer: "0.000000032",
    },
    {
      id: 29,
      question: "What is the scientific notation for 0.00054?",
      answers: ["5.4 × 10^-4", "54 × 10^-5", "5.4 × 10^-5", "0.54 × 10^-3"],
      correctAnswer: "5.4 × 10^-4",
    },
    {
      id: 30,
      question: "How is 1.5 × 10^3 written in standard form?",
      answers: ["1500", "150", "15", "1.5"],
      correctAnswer: "1500",
    },
  ],
};
