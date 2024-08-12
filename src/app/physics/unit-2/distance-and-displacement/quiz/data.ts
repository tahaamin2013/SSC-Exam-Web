export const quiz = {
  totalQuestions: 30,
  questions: [
    {
      id: 1,
      question: "What does distance represent in terms of movement?",
      answers: [
        "The length of the straight path between two positions.",
        "The length of the twisted path between two positions.",
        "The shortest distance between two points.",
        "The distance between the final position and the initial position.",
      ],
      correctAnswer: "The length of the path traveled between two positions.",
    },
    {
      id: 2,
      question: "Is distance a scalar or vector quantity?",
      answers: ["Vector", "Scalar", "Neither", "Both"],
      correctAnswer: "Scalar",
    },
    {
      id: 3,
      question: "What is the SI unit of distance?",
      answers: [
        "Kilometer (km)",
        "Meter (m)",
        "Centimeter (cm)",
        "Millimeter (mm)",
      ],
      correctAnswer: "Meter (m)",
    },
    {
      id: 4,
      question: "Which symbols are commonly used to denote distance?",
      answers: ["Δv, Δt", "Δx, Δr, Δs, Δd, Δl", "Δf, Δg, Δh", "Δa, Δb, Δc"],
      correctAnswer: "Δx, Δr, Δs, Δd, Δl",
    },
    {
      id: 5,
      question: "What is displacement?",
      answers: [
        "The length of the path traveled between two positions.",
        "The time taken to travel between two points.",
        "The shortest distance from the initial position to the final position.",
        "The total distance covered by an object.",
      ],
      correctAnswer:
        "The shortest distance from the initial position to the final position.",
    },
    {
      id: 6,
      question: "Is displacement a scalar or vector quantity?",
      answers: ["Scalar", "Vector", "Neither", "Both"],
      correctAnswer: "Vector",
    },
    {
      id: 7,
      question: "What is the SI unit of displacement?",
      answers: [
        "Kilometer (km)",
        "Meter (m)",
        "Centimeter (cm)",
        "Millimeter (mm)",
      ],
      correctAnswer: "Meter (m)",
    },
    {
      id: 8,
      question: "What does the symbol Δ represent?",
      answers: [
        "Difference in velocity",
        "Change in any quantity",
        "Difference in acceleration",
        "Change in mass",
      ],
      correctAnswer: "Change in any quantity",
    },
    {
      id: 9,
      question: "How is displacement mathematically represented?",
      answers: ["Δd = d1 - d2", "Δd = d2 + d1", "Δd = d2 - d1", "Δd = d1 + d2"],
      correctAnswer: "Δd = d2 - d1",
    },
    {
      id: 10,
      question:
        "What is the elapsed time (Δt) in terms of beginning time (t1) and ending time (t2)?",
      answers: ["Δt = t1 - t2", "Δt = t2 - t1", "Δt = t1 + t2", "Δt = t2 + t1"],
      correctAnswer: "Δt = t2 - t1",
    },
    {
      id: 11,
      question:
        "If you move around a 400 m running track and end up at the starting point, what is your displacement?",
      answers: ["400 m", "800 m", "0 m", "200 m"],
      correctAnswer: "0 m",
    },
    {
      id: 12,
      question:
        "If you move around a 400 m running track and end up at the starting point, what is the distance you have covered?",
      answers: ["0 m", "400 m", "800 m", "200 m"],
      correctAnswer: "400 m",
    },
    {
      id: 13,
      question: "Can displacement be greater than distance?",
      answers: ["Yes", "No", "Sometimes", "Only in certain conditions"],
      correctAnswer: "No",
    },
    {
      id: 14,
      question: "Can distance and displacement be equal?",
      answers: [
        "Yes, always",
        "No, never",
        "Yes, in a straight-line motion",
        "Only if the motion is circular",
      ],
      correctAnswer: "Yes, in a straight-line motion",
    },
    {
      id: 15,
      question:
        "If an object moves in a curved path, which is larger: the distance traveled or the displacement?",
      answers: [
        "Distance",
        "Displacement",
        "They are equal",
        "Cannot be determined",
      ],
      correctAnswer: "Distance",
    },
    {
      id: 16,
      question: "Which quantity is direction-dependent?",
      answers: ["Distance", "Displacement", "Both", "Neither"],
      correctAnswer: "Displacement",
    },
    {
      id: 17,
      question: "Which quantity is always positive or zero?",
      answers: ["Distance", "Displacement", "Both", "Neither"],
      correctAnswer: "Distance",
    },
    {
      id: 18,
      question:
        "In the context of movement, what does a negative displacement indicate?",
      answers: [
        "The object moved backward.",
        "The object moved forward.",
        "The object did not move.",
        "The object moved in a circular path.",
      ],
      correctAnswer: "The object moved backward.",
    },
    {
      id: 19,
      question:
        "If a car travels 100 meters east and then 50 meters west, what is the total distance covered?",
      answers: ["50 meters", "100 meters", "150 meters", "0 meters"],
      correctAnswer: "150 meters",
    },
    {
      id: 20,
      question:
        "If a car travels 100 meters east and then 50 meters west, what is the displacement?",
      answers: [
        "50 meters east",
        "150 meters east",
        "50 meters west",
        "100 meters west",
      ],
      correctAnswer: "50 meters east",
    },
    {
      id: 21,
      question: "When can the displacement be zero?",
      answers: [
        "When the object does not move.",
        "When the object returns to its starting point.",
        "When the object moves in a straight line.",
        "When the object moves in a circular path.",
      ],
      correctAnswer: "When the object returns to its starting point.",
    },
    {
      id: 22,
      question: "Which of the following is true for distance?",
      answers: [
        "It can be positive, negative, or zero.",
        "It can only be zero.",
        "It can only be positive.",
        "It can only be negative.",
      ],
      correctAnswer: "It can only be positive.",
    },
    {
      id: 23,
      question:
        "If a person walks 5 meters north, 3 meters east, and 2 meters south, what is their displacement?",
      answers: ["10 meters", "6 meters", "4 meters", "0 meters"],
      correctAnswer: "4 meters",
    },
    {
      id: 24,
      question:
        "If a person walks 5 meters north, 3 meters east, and 2 meters south, what is the distance they covered?",
      answers: ["10 meters", "6 meters", "4 meters", "0 meters"],
      correctAnswer: "10 meters",
    },
    {
      id: 25,
      question: "Why is displacement a vector quantity?",
      answers: [
        "Because it has only magnitude.",
        "Because it has only direction.",
        "Because it has both magnitude and direction.",
        "Because it has neither magnitude nor direction.",
      ],
      correctAnswer: "Because it has both magnitude and direction.",
    },
    {
      id: 26,
      question:
        "What is the displacement of a car that travels 20 meters north, 10 meters west, and 20 meters south?",
      answers: [
        "30 meters east",
        "10 meters west",
        "20 meters south",
        "10 meters east",
      ],
      correctAnswer: "10 meters west",
    },
    {
      id: 27,
      question:
        "Which of the following is not a correct representation of distance?",
      answers: ["Δx", "Δt", "Δs", "Δd"],
      correctAnswer: "Δt",
    },
    {
      id: 28,
      question: "In what scenario would distance and displacement be equal?",
      answers: [
        "When the object moves in a straight line without changing direction.",
        "When the object moves in a circular path.",
        "When the object moves back to its starting point.",
        "When the object does not move.",
      ],
      correctAnswer:
        "When the object moves in a straight line without changing direction.",
    },
    {
      id: 29,
      question:
        "Which path will give a greater distance: a straight path or a twisted path between two points?",
      answers: [
        "Straight path",
        "Twisted path",
        "Both are equal",
        "Depends on the path length",
      ],
      correctAnswer: "Twisted path",
    },
    {
      id: 30,
      question:
        "If a person walks 8 meters east, 6 meters north, and 8 meters west, what is the total distance covered?",
      answers: ["16 meters", "22 meters", "14 meters", "10 meters"],
      correctAnswer: "22 meters",
    },
  ],
};
