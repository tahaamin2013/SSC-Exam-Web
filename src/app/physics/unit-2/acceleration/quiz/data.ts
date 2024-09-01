export const quiz = {
  totalQuestions: 30,
  questions: [
    {
      id: 1,
      question: "What is acceleration a measure of?",
      answers: [
        "Change in speed",
        "Change in direction",
        "Change in velocity",
        "Elapsed time",
      ],
      correctAnswer: "Change in velocity",
    },
    {
      id: 2,
      question: "What is the SI unit of acceleration?",
      answers: ["m/s", "m/s²", "m²/s", "m²/s²"],
      correctAnswer: "m/s²",
    },
    {
      id: 3,
      question: "Acceleration is a vector quantity. What does this mean?",
      answers: [
        "It has only magnitude",
        "It has only direction",
        "It has both magnitude and direction",
        "It has no magnitude",
      ],
      correctAnswer: "It has both magnitude and direction",
    },
    {
      id: 4,
      question: "What does a positive acceleration indicate?",
      answers: [
        "An increase in velocity with time",
        "A decrease in velocity with time",
        "No change in velocity",
        "Constant velocity",
      ],
      correctAnswer: "An increase in velocity with time",
    },
    {
      id: 5,
      question: "What does negative acceleration (deceleration) mean?",
      answers: [
        "An increase in velocity with time",
        "A decrease in velocity with time",
        "No change in velocity",
        "Change in direction",
      ],
      correctAnswer: "A decrease in velocity with time",
    },
    {
      id: 6,
      question: "In what direction does acceleration occur?",
      answers: [
        "Opposite to the direction of velocity",
        "Same direction as the change in velocity",
        "Perpendicular to the change in velocity",
        "At an angle to the velocity",
      ],
      correctAnswer: "Same direction as the change in velocity",
    },
    {
      id: 7,
      question:
        "If an object&apos;svelocity changes by equal amounts in equal intervals of time, what type of acceleration does it have?",
      answers: [
        "Non-uniform acceleration",
        "Zero acceleration",
        "Uniform acceleration",
        "Random acceleration",
      ],
      correctAnswer: "Uniform acceleration",
    },
    {
      id: 8,
      question: "What does non-uniform acceleration imply?",
      answers: [
        "The object&apos;svelocity changes at a constant rate",
        "The rate of velocity change is not steady over time",
        "There is no change in velocity",
        "Velocity increases exponentially",
      ],
      correctAnswer: "The rate of velocity change is not steady over time",
    },
    {
      id: 9,
      question:
        "Which of the following is a common example of non-uniform acceleration?",
      answers: [
        "A car moving at a constant speed",
        "A ball rolling down a hill",
        "An object at rest",
        "A satellite orbiting the Earth",
      ],
      correctAnswer: "A ball rolling down a hill",
    },
    {
      id: 10,
      question:
        "If v₁ = 2 m/s and v₂ = 4 m/s, is there acceleration, and if so, in what direction?",
      answers: [
        "Yes, in the same direction as the velocity",
        "Yes, in the opposite direction of the velocity",
        "No, there is no acceleration",
        "Cannot be determined",
      ],
      correctAnswer: "Yes, in the same direction as the velocity",
    },
    {
      id: 11,
      question:
        "If v₁ = 3 m/s and v₂ = 1 m/s, what can be said about the acceleration?",
      answers: [
        "Positive acceleration in the same direction as velocity",
        "Negative acceleration in the opposite direction of velocity",
        "No acceleration",
        "Constant speed",
      ],
      correctAnswer:
        "Negative acceleration in the opposite direction of velocity",
    },
    {
      id: 12,
      question:
        "If a tennis ball has an initial velocity of 2 m/s and a final velocity of 2 m/s, what is the acceleration?",
      answers: ["Positive", "Negative", "Zero", "Cannot be determined"],
      correctAnswer: "Zero",
    },
    {
      id: 13,
      question:
        "In the example of a cheetah, what is the cheetah&apos;sacceleration if it reaches 26.8 m/s in 3 seconds?",
      answers: ["8.93 m/s²", "9.8 m/s²", "26.8 m/s²", "3 m/s²"],
      correctAnswer: "8.93 m/s²",
    },
    {
      id: 14,
      question:
        "What is the initial velocity of the cheetah in the given example?",
      answers: ["0 m/s", "26.8 m/s", "3 m/s", "9.8 m/s"],
      correctAnswer: "0 m/s",
    },
    {
      id: 15,
      question:
        "Which of the following statements about uniform acceleration is true?",
      answers: [
        "It occurs when an object changes its velocity at different rates each second.",
        "It occurs when an object changes its velocity at the same rate each second.",
        "It occurs when an object remains at rest.",
        "It occurs when an object changes direction without changing speed.",
      ],
      correctAnswer:
        "It occurs when an object changes its velocity at the same rate each second.",
    },
    {
      id: 16,
      question: "What happens during non-uniform acceleration?",
      answers: [
        "The object&apos;svelocity increases at a constant rate.",
        "The object&apos;svelocity decreases at a constant rate.",
        "The rate of change of velocity varies over time.",
        "The object moves in a circular path.",
      ],
      correctAnswer: "The rate of change of velocity varies over time.",
    },
    {
      id: 17,
      question: "Which scientist first measured speed as distance over time?",
      answers: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Johannes Kepler",
      ],
      correctAnswer: "Galileo Galilei",
    },
    {
      id: 18,
      question: "What is the acceleration due to gravity denoted by?",
      answers: ["a", "v", "g", "m"],
      correctAnswer: "g",
    },
    {
      id: 19,
      question:
        "During Galileo&apos;sexperiment from the Leaning Tower of Pisa, what did he observe?",
      answers: [
        "Objects of different masses reached the ground at different times.",
        "Objects of different masses reached the ground at the same time.",
        "Heavier objects fell faster than lighter ones.",
        "Lighter objects fell faster than heavier ones.",
      ],
      correctAnswer:
        "Objects of different masses reached the ground at the same time.",
    },
    {
      id: 20,
      question: "If a car is at rest, what is its velocity and acceleration?",
      answers: [
        "Velocity = 0 m/s, Acceleration = 0 m/s²",
        "Velocity = 0 m/s, Acceleration = 3 m/s²",
        "Velocity = 3 m/s, Acceleration = 0 m/s²",
        "Velocity = 3 m/s, Acceleration = 3 m/s²",
      ],
      correctAnswer: "Velocity = 0 m/s, Acceleration = 0 m/s²",
    },
    {
      id: 21,
      question:
        "If a car is speeding up, what can be said about its acceleration?",
      answers: [
        "It has positive acceleration.",
        "It has negative acceleration.",
        "It has zero acceleration.",
        "It is moving with constant velocity.",
      ],
      correctAnswer: "It has positive acceleration.",
    },
    {
      id: 22,
      question:
        "If a car is moving at a constant speed, what can be said about its acceleration?",
      answers: [
        "Positive acceleration",
        "Negative acceleration",
        "Zero acceleration",
        "Increasing acceleration",
      ],
      correctAnswer: "Zero acceleration",
    },
    {
      id: 23,
      question:
        "If a car is slowing down, what can be said about its acceleration?",
      answers: [
        "It has positive acceleration.",
        "It has negative acceleration.",
        "It has zero acceleration.",
        "It has increasing velocity.",
      ],
      correctAnswer: "It has negative acceleration.",
    },
    {
      id: 24,
      question: "What is the formula for calculating acceleration?",
      answers: [
        "a = v₁ / v₂",
        "a = v₂ / ∆t",
        "a = (v₂ - v₁) / ∆t",
        "a = v₂ * v₁ / ∆t",
      ],
      correctAnswer: "a = (v₂ - v₁) / ∆t",
    },
    {
      id: 25,
      question:
        "If the velocity of an object changes from 5 m/s to 15 m/s in 2 seconds, what is the acceleration?",
      answers: ["2 m/s²", "5 m/s²", "7.5 m/s²", "10 m/s²"],
      correctAnswer: "5 m/s²",
    },
    {
      id: 26,
      question: "What does it mean if an object has zero acceleration?",
      answers: [
        "The object is moving at a constant speed.",
        "The object is not moving.",
        "The object is speeding up.",
        "The object is slowing down.",
      ],
      correctAnswer: "The object is moving at a constant speed.",
    },
    {
      id: 27,
      question:
        "In the cheetah example, what is the direction of acceleration if the cheetah runs towards the east?",
      answers: ["North", "South", "West", "East"],
      correctAnswer: "East",
    },
    {
      id: 28,
      question: "What do we call the acceleration of freely falling bodies?",
      answers: [
        "Centripetal acceleration",
        "Tangential acceleration",
        "Gravitational acceleration",
        "Electromagnetic acceleration",
      ],
      correctAnswer: "Gravitational acceleration",
    },
    {
      id: 29,
      question:
        "If a drone changes direction but maintains the same speed, is it accelerating?",
      answers: [
        "Yes, because only a change in direction can cause acceleration.",
        "No, because acceleration only occurs with changes in speed.",
        "Yes, because acceleration occurs with changes in speed or direction.",
        "No, because the speed is constant.",
      ],
      correctAnswer:
        "Yes, because acceleration occurs with changes in speed or direction.",
    },
    {
      id: 30,
      question:
        "How did Galileo demonstrate that objects of different masses fall at the same rate?",
      answers: [
        "By measuring their velocity",
        "By measuring their acceleration",
        "By dropping them from the Leaning Tower of Pisa",
        "By calculating their weight",
      ],
      correctAnswer: "By dropping them from the Leaning Tower of Pisa",
    },
  ],
};
