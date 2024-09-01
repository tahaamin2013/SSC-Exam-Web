export const quiz = {
  totalQuestions: 30,
  questions: [
    {
      id: 1,
      question: "What does precision in measurements refer to?",
      answers: [
        "The degree of agreement between repeated measurements",
        "The closeness of a measured value to the true value",
        "The absence of systematic errors",
        "The range of measurement values",
      ],
      correctAnswer: "The degree of agreement between repeated measurements",
    },
    {
      id: 2,
      question: "What does accuracy in measurements refer to?",
      answers: [
        "How close a measured value is to the true value",
        "The degree of agreement between repeated measurements",
        "The consistency of the measurement process",
        "The variation in measurement results",
      ],
      correctAnswer: "How close a measured value is to the true value",
    },
    {
      id: 3,
      question:
        "Which of the following describes a measurement that is precise but not accurate?",
      answers: [
        "Measurements are tightly grouped but consistently off-center",
        "Measurements are scattered but close to the true value",
        "Measurements are closely clustered around the true value",
        "Measurements are randomly dispersed",
      ],
      correctAnswer:
        "Measurements are tightly grouped but consistently off-center",
    },
    {
      id: 4,
      question:
        "Which scenario best illustrates a measurement that is accurate but not precise?",
      answers: [
        "Measurements are scattered but average to the true value",
        "Measurements are tightly grouped but not near the true value",
        "Measurements are consistent and close to the true value",
        "Measurements are both precise and accurate",
      ],
      correctAnswer: "Measurements are scattered but average to the true value",
    },
    {
      id: 5,
      question: "What is the ideal scenario for measurements?",
      answers: [
        "Measurements that are both precise and accurate",
        "Measurements that are only accurate",
        "Measurements that are only precise",
        "Measurements that are neither accurate nor precise",
      ],
      correctAnswer: "Measurements that are both precise and accurate",
    },
    {
      id: 6,
      question:
        "In the dartboard analogy, what does a tightly grouped cluster of darts not hitting the bullseye represent?",
      answers: [
        "Precise but not accurate",
        "Accurate and precise",
        "Accurate but not precise",
        "Neither accurate nor precise",
      ],
      correctAnswer: "Precise but not accurate",
    },
    {
      id: 7,
      question:
        "If a thermometer consistently reads 2 degrees Celsius higher than the actual temperature, what does this indicate?",
      answers: [
        "The thermometer is not accurate but may be precise",
        "The thermometer is accurate and precise",
        "The thermometer is precise but not accurate",
        "The thermometer is neither accurate nor precise",
      ],
      correctAnswer: "The thermometer is not accurate but may be precise",
    },
    {
      id: 8,
      question:
        "How many significant digits are in the result of counting 57,000 books one by one?",
      answers: [
        "2 significant digits",
        "3 significant digits",
        "4 significant digits",
        "5 significant digits",
      ],
      correctAnswer: "2 significant digits",
    },
    {
      id: 9,
      question:
        "Will the number of significant digits in the count of books change if they are measured in packets of 10?",
      answers: [
        "No, the number of significant digits remains the same",
        "Yes, the number of significant digits will increase",
        "Yes, the number of significant digits will decrease",
        "It depends on the measurement method",
      ],
      correctAnswer: "No, the number of significant digits remains the same",
    },
    {
      id: 10,
      question:
        "What should be done to achieve both precision and accuracy in measurements?",
      answers: [
        "Careful calibration of instruments and control of experimental conditions",
        "Increasing the number of measurements",
        "Using more sophisticated instruments",
        "Minimizing personal bias",
      ],
      correctAnswer:
        "Careful calibration of instruments and control of experimental conditions",
    },
    {
      id: 11,
      question:
        "What is an example of a precise measurement that is not accurate?",
      answers: [
        "A scale that always overestimates weight by the same amount",
        "A thermometer that fluctuates widely",
        "A measurement with high variability",
        "A tool that consistently measures the same value close to the true value",
      ],
      correctAnswer:
        "A scale that always overestimates weight by the same amount",
    },
    {
      id: 12,
      question:
        "Which of the following describes measurements that are close to the true value but vary widely?",
      answers: [
        "Accurate but not precise",
        "Precise but not accurate",
        "Neither accurate nor precise",
        "Both accurate and precise",
      ],
      correctAnswer: "Accurate but not precise",
    },
    {
      id: 13,
      question:
        "What does it mean if a measurement process is reliable and consistent?",
      answers: [
        "The measurements are precise",
        "The measurements are accurate",
        "The measurements are both accurate and precise",
        "The measurements are neither accurate nor precise",
      ],
      correctAnswer: "The measurements are precise",
    },
    {
      id: 14,
      question:
        "Why is understanding precision and accuracy important in experiments?",
      answers: [
        "To determine the reliability and validity of results",
        "To eliminate all errors",
        "To standardize measurements",
        "To improve speed of experimentation",
      ],
      correctAnswer: "To determine the reliability and validity of results",
    },
    {
      id: 15,
      question: "What does the term 'significant digits' refer to?",
      answers: [
        "The digits in a number that contribute to its precision",
        "The digits that are close to the true value",
        "The total number of digits in a measurement",
        "The number of digits used to calibrate an instrument",
      ],
      correctAnswer: "The digits in a number that contribute to its precision",
    },
    {
      id: 16,
      question: "How can you determine if a measurement is accurate?",
      answers: [
        "By comparing it to the true or accepted value",
        "By checking if it is consistent with other measurements",
        "By ensuring it has a high number of significant digits",
        "By repeating the measurement multiple times",
      ],
      correctAnswer: "By comparing it to the true or accepted value",
    },
    {
      id: 17,
      question:
        "What does a measurement that is neither accurate nor precise look like?",
      answers: [
        "Measurements are scattered and not close to the true value",
        "Measurements are consistent but not near the true value",
        "Measurements are close to the true value but vary widely",
        "Measurements are tightly grouped and near the true value",
      ],
      correctAnswer:
        "Measurements are scattered and not close to the true value",
    },
    {
      id: 18,
      question:
        "In the dartboard analogy, what does hitting the bullseye and being tightly grouped represent?",
      answers: [
        "Accurate and precise",
        "Accurate but not precise",
        "Precise but not accurate",
        "Neither accurate nor precise",
      ],
      correctAnswer: "Accurate and precise",
    },
    {
      id: 19,
      question:
        "What is an example of a measurement tool that could be precise but not accurate?",
      answers: [
        "A ruler that consistently gives a reading 1 cm too long",
        "A digital scale that fluctuates widely",
        "A thermometer with a varying calibration",
        "A tape measure with inconsistent markings",
      ],
      correctAnswer: "A ruler that consistently gives a reading 1 cm too long",
    },
    {
      id: 20,
      question:
        "Which aspect of measurement is concerned with the absence of systematic errors?",
      answers: [
        "Accuracy",
        "Precision",
        "Significant digits",
        "Reproducibility",
      ],
      correctAnswer: "Accuracy",
    },
    {
      id: 21,
      question:
        "What is true about a measurement that is precise but not accurate?",
      answers: [
        "It consistently produces similar results, but those results are not close to the true value",
        "It produces results that vary widely but average to the true value",
        "It is both consistent and close to the true value",
        "It is neither consistent nor close to the true value",
      ],
      correctAnswer:
        "It consistently produces similar results, but those results are not close to the true value",
    },
    {
      id: 22,
      question: "Why might a thermometer be precise but not accurate?",
      answers: [
        "It consistently reads the same value, but that value is not the true temperature",
        "It fluctuates widely, making readings inconsistent",
        "It consistently reads close to the true temperature",
        "It provides readings that are inconsistent and inaccurate",
      ],
      correctAnswer:
        "It consistently reads the same value, but that value is not the true temperature",
    },
    {
      id: 23,
      question:
        "How does the concept of significant digits apply to precision and accuracy?",
      answers: [
        "Significant digits indicate the level of precision in a measurement",
        "Significant digits indicate how close a measurement is to the true value",
        "Significant digits show how consistent measurements are",
        "Significant digits are irrelevant to precision and accuracy",
      ],
      correctAnswer:
        "Significant digits indicate the level of precision in a measurement",
    },
    {
      id: 24,
      question: "How can precision be improved in measurements?",
      answers: [
        "By repeating measurements and reducing variability",
        "By calibrating instruments to the true value",
        "By comparing measurements to accepted values",
        "By increasing the number of significant digits",
      ],
      correctAnswer: "By repeating measurements and reducing variability",
    },
    {
      id: 25,
      question:
        "How does one ensure measurements are both accurate and precise?",
      answers: [
        "By careful calibration, control of conditions, and minimizing errors",
        "By using more advanced equipment",
        "By taking fewer measurements",
        "By focusing only on precision",
      ],
      correctAnswer:
        "By careful calibration, control of conditions, and minimizing errors",
    },
    {
      id: 26,
      question:
        "What does the term 'mean value' refer to in the context of multiple measurements?",
      answers: [
        "The average value obtained from repeated measurements",
        "The closest value to the true value",
        "The most frequently occurring measurement",
        "The value with the fewest significant digits",
      ],
      correctAnswer: "The average value obtained from repeated measurements",
    },
    {
      id: 27,
      question:
        "What is a characteristic of measurements that are both accurate and precise?",
      answers: [
        "They are consistently close to the true value and tightly grouped",
        "They are scattered but average close to the true value",
        "They are consistent but not close to the true value",
        "They are neither consistent nor close to the true value",
      ],
      correctAnswer:
        "They are consistently close to the true value and tightly grouped",
    },
    {
      id: 28,
      question: "Which of the following is a method to handle random errors?",
      answers: [
        "Taking multiple measurements and using statistical analysis",
        "Adjusting the instrument calibration",
        "Improving the experimental setup",
        "Reducing personal bias",
      ],
      correctAnswer:
        "Taking multiple measurements and using statistical analysis",
    },
    {
      id: 29,
      question:
        "What effect does increasing the number of significant digits have on precision?",
      answers: [
        "It increases the perceived precision of the measurement",
        "It improves the accuracy of the measurement",
        "It has no effect on precision",
        "It decreases the measurement&apos;sreliability",
      ],
      correctAnswer: "It increases the perceived precision of the measurement",
    },
    {
      id: 30,
      question:
        "What is the key difference between precision and accuracy in measurements?",
      answers: [
        "Precision is about consistency, accuracy is about closeness to the true value",
        "Precision is about closeness to the true value, accuracy is about consistency",
        "Precision and accuracy are the same",
        "Precision is about the number of significant digits, accuracy is about the measurement range",
      ],
      correctAnswer:
        "Precision is about consistency, accuracy is about closeness to the true value",
    },
  ],
};
