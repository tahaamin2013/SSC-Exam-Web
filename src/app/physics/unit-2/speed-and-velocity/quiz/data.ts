export const quiz = {
  totalQuestions: 30,
  questions: [
    {
      id: 1,
      question: "What is the SI unit of speed?",
      answers: ["Meter", "Meter per second", "Kilometer per hour", "Second"],
      correctAnswer: "Meter per second",
    },
    {
      id: 2,
      question: "Which of the following equations correctly represents speed?",
      answers: [
        "speed = Δd / Δt",
        "speed = Δs / Δt",
        "speed = Δd / Δs",
        "speed = Δt / Δs",
      ],
      correctAnswer: "speed = Δs / Δt",
    },
    {
      id: 3,
      question: "If a car covers 100 meters in 5 seconds, what is its speed?",
      answers: ["20 m/s", "25 m/s", "50 m/s", "100 m/s"],
      correctAnswer: "20 m/s",
    },
    {
      id: 4,
      question: "What is the formula for calculating average speed?",
      answers: [
        "Average speed = total distance / total time",
        "Average speed = total time / total distance",
        "Average speed = total distance * total time",
        "Average speed = (initial speed + final speed) / 2",
      ],
      correctAnswer: "Average speed = total distance / total time",
    },
    {
      id: 5,
      question: "What is the speed of light in a vacuum?",
      answers: [
        "299,792 m/s",
        "299,792 km/h",
        "299,792,458 m/s",
        "299,792,458 km/h",
      ],
      correctAnswer: "299,792,458 m/s",
    },
    {
      id: 6,
      question: "What type of quantity is speed?",
      answers: ["Vector", "Scalar", "Dimensionless", "Complex"],
      correctAnswer: "Scalar",
    },
    {
      id: 7,
      question: "What is the difference between speed and velocity?",
      answers: [
        "Speed has direction, velocity does not",
        "Velocity has direction, speed does not",
        "Speed is a vector, velocity is a scalar",
        "There is no difference",
      ],
      correctAnswer: "Velocity has direction, speed does not",
    },
    {
      id: 8,
      question:
        "If a cyclist travels 60 km in 2 hours, what is their average speed?",
      answers: ["30 km/h", "60 km/h", "120 km/h", "15 km/h"],
      correctAnswer: "30 km/h",
    },
    {
      id: 9,
      question: "What does instantaneous speed refer to?",
      answers: [
        "Speed over a period of time",
        "Speed at a specific instant",
        "Average speed over a trip",
        "None of the above",
      ],
      correctAnswer: "Speed at a specific instant",
    },
    {
      id: 10,
      question:
        "What is the average speed of a car traveling 80 km in 1 hour and 20 minutes?",
      answers: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
      correctAnswer: "60 km/h",
    },
    {
      id: 11,
      question: "Which object is moving with uniform speed?",
      answers: [
        "A car accelerating",
        "A ball falling freely under gravity",
        "A satellite orbiting Earth",
        "A car slowing down",
      ],
      correctAnswer: "A satellite orbiting Earth",
    },
    {
      id: 12,
      question:
        "If a train travels at a constant speed of 100 km/h for 3 hours, how far does it travel?",
      answers: ["200 km", "300 km", "400 km", "500 km"],
      correctAnswer: "300 km",
    },
    {
      id: 13,
      question:
        "What is the average velocity of an object that returns to its starting point?",
      answers: [
        "Equal to its speed",
        "Half of its speed",
        "Zero",
        "It depends on the distance traveled",
      ],
      correctAnswer: "Zero",
    },
    {
      id: 14,
      question: "What type of quantity is velocity?",
      answers: ["Vector", "Scalar", "Dimensionless", "Complex"],
      correctAnswer: "Vector",
    },
    {
      id: 15,
      question:
        "What is the average speed of a cyclist who travels 40 km in 1 hour and 30 minutes?",
      answers: ["26.67 km/h", "30 km/h", "40 km/h", "45 km/h"],
      correctAnswer: "26.67 km/h",
    },
    {
      id: 16,
      question: "What is the term for speed that changes with time?",
      answers: [
        "Constant speed",
        "Uniform speed",
        "Variable speed",
        "Instantaneous speed",
      ],
      correctAnswer: "Variable speed",
    },
    {
      id: 17,
      question:
        "A car moves from point A to point B in 2 hours and then returns to point A in 3 hours. What is its average speed for the entire trip if the total distance is 150 km?",
      answers: ["30 km/h", "50 km/h", "60 km/h", "75 km/h"],
      correctAnswer: "30 km/h",
    },
    {
      id: 18,
      question: "What is the speed of sound in air approximately?",
      answers: ["343 m/s", "767 m/s", "1235 km/h", "299,792 km/h"],
      correctAnswer: "343 m/s",
    },
    {
      id: 19,
      question:
        "If an object covers equal distances in equal intervals of time, what kind of speed is it said to have?",
      answers: [
        "Variable speed",
        "Instantaneous speed",
        "Uniform speed",
        "Average speed",
      ],
      correctAnswer: "Uniform speed",
    },
    {
      id: 20,
      question:
        "What is the average velocity of a car that travels 500 meters in 10 seconds and then 500 meters back in another 10 seconds?",
      answers: ["0 m/s", "25 m/s", "50 m/s", "100 m/s"],
      correctAnswer: "0 m/s",
    },
    {
      id: 21,
      question:
        "What kind of velocity does an object have if its direction is constantly changing, but its speed is constant?",
      answers: [
        "Uniform velocity",
        "Variable velocity",
        "Instantaneous velocity",
        "Average velocity",
      ],
      correctAnswer: "Variable velocity",
    },
    {
      id: 22,
      question:
        "If an object is moving with a velocity of 20 m/s east, what additional information is needed to fully describe its motion?",
      answers: ["Speed", "Distance", "Direction", "None"],
      correctAnswer: "None",
    },
    {
      id: 23,
      question:
        "If a ball travels 50 meters in 2 seconds and then 70 meters in 3 seconds, what is its average speed?",
      answers: ["30 m/s", "40 m/s", "35 m/s", "25 m/s"],
      correctAnswer: "35 m/s",
    },
    {
      id: 24,
      question:
        "What is the term for speed that is measured at a specific instant of time?",
      answers: [
        "Average speed",
        "Instantaneous speed",
        "Variable speed",
        "Uniform speed",
      ],
      correctAnswer: "Instantaneous speed",
    },
    {
      id: 25,
      question:
        "What is the average velocity of a runner who runs 200 meters north in 30 seconds and then 300 meters south in 45 seconds?",
      answers: ["0 m/s", "2 m/s", "4 m/s", "5 m/s"],
      correctAnswer: "2 m/s",
    },
    {
      id: 26,
      question: "What is the formula for calculating instantaneous velocity?",
      answers: [
        "Velocity = Δd / Δt",
        "Velocity = Δs / Δt",
        "Instantaneous velocity = Speed + Direction",
        "Velocity = (Initial velocity + Final velocity) / 2",
      ],
      correctAnswer: "Velocity = Δd / Δt",
    },
    {
      id: 27,
      question:
        "A car travels 90 km in 1 hour and 30 minutes. What is its average speed in km/h?",
      answers: ["60 km/h", "65 km/h", "70 km/h", "75 km/h"],
      correctAnswer: "60 km/h",
    },
    {
      id: 28,
      question:
        "What is the average speed of a train that travels 120 km in 2 hours and 30 minutes?",
      answers: ["45 km/h", "50 km/h", "55 km/h", "60 km/h"],
      correctAnswer: "48 km/h",
    },
    {
      id: 29,
      question:
        "What is the unit of measurement for velocity in the SI system?",
      answers: [
        "Meters per second (m/s)",
        "Meters per hour (m/h)",
        "Kilometers per hour (km/h)",
        "Feet per second (ft/s)",
      ],
      correctAnswer: "Meters per second (m/s)",
    },
    {
      id: 30,
      question: "How does acceleration relate to velocity?",
      answers: [
        "Acceleration is the rate of change of velocity",
        "Acceleration is the same as velocity",
        "Acceleration is the inverse of velocity",
        "Acceleration and velocity are unrelated",
      ],
      correctAnswer: "Acceleration is the rate of change of velocity",
    },
  ],
};
