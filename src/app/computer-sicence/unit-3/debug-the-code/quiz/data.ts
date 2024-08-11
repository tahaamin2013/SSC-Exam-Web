export const quiz = {
  totalQuestions: 25,
  questions: [
    {
      id: 1,
      question: "What is the purpose of debugging?",
      answers: [
        "A) To write new code",
        "B) To locate and fix errors in code",
        "C) To create new features",
        "D) To optimize performance",
      ],
      correctAnswer: "B) To locate and fix errors in code",
    },
    {
      id: 2,
      question: "Which development environment is mentioned for debugging?",
      answers: [
        "A) Eclipse",
        "B) NetBeans",
        "C) Visual Studio .Net",
        "D) IntelliJ IDEA",
      ],
      correctAnswer: "C) Visual Studio .Net",
    },
    {
      id: 3,
      question:
        "How do you access the debug menu and console in Visual Studio .Net?",
      answers: [
        "A) Run Debugging",
        "B) Start Debugging",
        "C) Debug Menu",
        "D) Debug Console",
      ],
      correctAnswer: "A) Run Debugging",
    },
    {
      id: 4,
      question:
        "Which feature allows you to control execution by pausing and continuing?",
      answers: [
        "A) Breakpoints",
        "B) Step Into",
        "C) Pause/Continue",
        "D) Watch",
      ],
      correctAnswer: "C) Pause/Continue",
    },
    {
      id: 5,
      question: "What does the 'Step Into' feature do?",
      answers: [
        "A) Skips function calls",
        "B) Runs the program without stopping",
        "C) Provides detailed line-by-line analysis",
        "D) Stops execution immediately",
      ],
      correctAnswer: "C) Provides detailed line-by-line analysis",
    },
    {
      id: 6,
      question: "What is the function of breakpoints?",
      answers: [
        "A) To delete lines of code",
        "B) To pause execution at specific lines",
        "C) To add comments",
        "D) To speed up execution",
      ],
      correctAnswer: "B) To pause execution at specific lines",
    },
    {
      id: 7,
      question: "How can breakpoints help in debugging?",
      answers: [
        "A) They add new features",
        "B) They help analyze variable values during execution",
        "C) They optimize code",
        "D) They execute code faster",
      ],
      correctAnswer: "B) They help analyze variable values during execution",
    },
    {
      id: 8,
      question:
        "What does the following code do?\nfunction calculateSum(a, b) {\n    let sum = a + b;  // Breakpoint here\n    return sum;\n}",
      answers: [
        "A) Subtracts two numbers",
        "B) Multiplies two numbers",
        "C) Adds two numbers",
        "D) Divides two numbers",
      ],
      correctAnswer: "C) Adds two numbers",
    },
    {
      id: 9,
      question:
        "Where is the breakpoint set in the example function calculateSum?",
      answers: [
        "A) At the function declaration",
        "B) At the return statement",
        "C) At the sum variable declaration",
        "D) At the let sum statement",
      ],
      correctAnswer: "D) At the let sum statement",
    },
    {
      id: 10,
      question:
        "Which key feature of debugging allows you to control the flow of code execution?",
      answers: [
        "A) Step Over",
        "B) Pause/Continue",
        "C) Breakpoints",
        "D) Step Out",
      ],
      correctAnswer: "B) Pause/Continue",
    },
    {
      id: 11,
      question: "What is the primary benefit of using breakpoints in code?",
      answers: [
        "A) To write more efficient code",
        "B) To pause and inspect code execution at specific points",
        "C) To run code faster",
        "D) To automatically fix errors",
      ],
      correctAnswer:
        "B) To pause and inspect code execution at specific points",
    },
    {
      id: 12,
      question: "What does the 'Step Into' command allow a developer to do?",
      answers: [
        "A) Skip over functions",
        "B) Execute code faster",
        "C) Step into functions for detailed analysis",
        "D) Continue execution without stopping",
      ],
      correctAnswer: "C) Step into functions for detailed analysis",
    },
    {
      id: 13,
      question: "Which feature is NOT mentioned as a key debugging feature?",
      answers: [
        "A) Pause/Continue",
        "B) Step Into",
        "C) Breakpoints",
        "D) Auto-fix",
      ],
      correctAnswer: "D) Auto-fix",
    },
    {
      id: 14,
      question: "How does setting a breakpoint assist in debugging?",
      answers: [
        "A) It executes the code faster",
        "B) It skips over errors",
        "C) It allows you to pause and examine the code at a specific point",
        "D) It removes bugs automatically",
      ],
      correctAnswer:
        "C) It allows you to pause and examine the code at a specific point",
    },
    {
      id: 15,
      question:
        "Which debugging feature allows for a detailed, line-by-line analysis of code?",
      answers: [
        "A) Breakpoints",
        "B) Step Into",
        "C) Pause/Continue",
        "D) Console Log",
      ],
      correctAnswer: "B) Step Into",
    },
    {
      id: 16,
      question: "What does the example function calculateSum(a, b) return?",
      answers: [
        "A) The difference of a and b",
        "B) The product of a and b",
        "C) The sum of a and b",
        "D) The quotient of a and b",
      ],
      correctAnswer: "C) The sum of a and b",
    },
    {
      id: 17,
      question:
        "What is the significance of placing a breakpoint at 'let sum = a + b;'?",
      answers: [
        "A) To skip this line",
        "B) To pause execution before the sum is calculated",
        "C) To delete the sum variable",
        "D) To change the value of a and b",
      ],
      correctAnswer: "B) To pause execution before the sum is calculated",
    },
    {
      id: 18,
      question:
        "What command would you use to continue execution after pausing at a breakpoint?",
      answers: ["A) Step Into", "B) Step Over", "C) Pause", "D) Continue"],
      correctAnswer: "D) Continue",
    },
    {
      id: 19,
      question:
        "In Visual Studio .Net, what menu option allows you to start debugging?",
      answers: [
        "A) Run Debugging",
        "B) Start Debugging",
        "C) Debug Menu",
        "D) Debug Console",
      ],
      correctAnswer: "A) Run Debugging",
    },
    {
      id: 20,
      question: "What can you examine at a breakpoint to help debug your code?",
      answers: [
        "A) Variable values",
        "B) Code syntax",
        "C) File paths",
        "D) Function names",
      ],
      correctAnswer: "A) Variable values",
    },
    {
      id: 21,
      question:
        "What is a key advantage of using the 'Step Into' feature during debugging?",
      answers: [
        "A) It skips over functions",
        "B) It provides an overview of the entire code",
        "C) It allows for detailed examination of function calls",
        "D) It automatically fixes errors",
      ],
      correctAnswer: "C) It allows for detailed examination of function calls",
    },
    {
      id: 22,
      question:
        "What does the 'Pause/Continue' feature help you control during debugging?",
      answers: [
        "A) The color scheme of the IDE",
        "B) The speed of code execution",
        "C) The flow of code execution",
        "D) The number of lines of code",
      ],
      correctAnswer: "C) The flow of code execution",
    },
    {
      id: 23,
      question: "What is a breakpoint used for in debugging?",
      answers: [
        "A) To run the code faster",
        "B) To pause execution at a specific line",
        "C) To delete lines of code",
        "D) To add comments",
      ],
      correctAnswer: "B) To pause execution at a specific line",
    },
    {
      id: 24,
      question: "How does stepping into a function help in debugging?",
      answers: [
        "A) It skips the function execution",
        "B) It provides a high-level overview",
        "C) It allows you to see the detailed execution of the function",
        "D) It automatically corrects errors in the function",
      ],
      correctAnswer:
        "C) It allows you to see the detailed execution of the function",
    },
    {
      id: 25,
      question: "What happens when you set a breakpoint in your code?",
      answers: [
        "A) The code executes without stopping",
        "B) The code pauses execution at the breakpoint",
        "C) The code skips the line with the breakpoint",
        "D) The code runs faster",
      ],
      correctAnswer: "B) The code pauses execution at the breakpoint",
    },
  ],
};
