export const quiz = {
  totalQuestions: 7,
  questions: [
    {
      id: 1,
      question: "What is the primary use of JavaScript?",
      answers: [
        "A) Web development",
        "B) System programming",
        "C) Database management",
        "D) Network configuration",
      ],
      correctAnswer: "A) Web development",
    },
    {
      id: 2,
      question: "Which HTML tag is used to embed JavaScript in a webpage?",
      answers: ["A) <script>", "B) <js>", "C) <java>", "D) <code>"],
      correctAnswer: "A) <script>",
    },
    {
      id: 3,
      question:
        "What is the purpose of the 'type' attribute in the <script> tag?",
      answers: [
        "A) To specify the programming language used",
        "B) To define the script&apos;sexecution order",
        "C) To set the script&apos;sfile type",
        "D) It&apos;soptional in modern HTML",
      ],
      correctAnswer: "D) It&apos;soptional in modern HTML",
    },
    {
      id: 4,
      question: "Why is the sequence of instructions important in JavaScript?",
      answers: [
        "A) To ensure variables are declared and initialized before use",
        "B) To improve code execution speed",
        "C) To manage multiple script files",
        "D) To define function scope",
      ],
      correctAnswer:
        "A) To ensure variables are declared and initialized before use",
    },
    {
      id: 5,
      question:
        "Which of the following is NOT an arithmetic operator in JavaScript?",
      answers: ["A) +", "B) -", "C) /", "D) &"],
      correctAnswer: "D) &",
    },
    {
      id: 6,
      question: "How do you perform addition in JavaScript?",
      answers: [
        "A) Using the + operator",
        "B) Using the & operator",
        "C) Using the * operator",
        "D) Using the / operator",
      ],
      correctAnswer: "A) Using the + operator",
    },
    {
      id: 7,
      question:
        "Which event is used to trigger a function when a button is clicked?",
      answers: ["A) onclick", "B) onload", "C) onmouseover", "D) onsubmit"],
      correctAnswer: "A) onclick",
    },
    {
      id: 8,
      question: "How can you get user input in JavaScript?",
      answers: [
        "A) Using the prompt() function",
        "B) Using the alert() function",
        "C) Using the console.log() function",
        "D) Using the document.write() function",
      ],
      correctAnswer: "A) Using the prompt() function",
    },
    {
      id: 9,
      question:
        "Which of the following is a valid JavaScript variable declaration?",
      answers: [
        "A) var x = 5;",
        "B) int x = 5;",
        "C) let x == 5;",
        "D) x := 5;",
      ],
      correctAnswer: "A) var x = 5;",
    },
    {
      id: 10,
      question:
        "What will be the output of the following code? document.write('Value of variable x is: ' + x); var x = 5;",
      answers: [
        "A) Value of variable x is: 5",
        "B) Value of variable x is: undefined",
        "C) Error: x is not defined",
        "D) Nothing will be displayed",
      ],
      correctAnswer: "B) Value of variable x is: undefined",
    },
    {
      id: 11,
      question:
        "Which JavaScript operator is used to find the remainder of a division?",
      answers: ["A) %", "B) /", "C) *", "D) -"],
      correctAnswer: "A) %",
    },
    {
      id: 12,
      question: "What is the purpose of the 'if' statement in JavaScript?",
      answers: [
        "A) To execute code based on a condition",
        "B) To define functions",
        "C) To loop through code blocks",
        "D) To declare variables",
      ],
      correctAnswer: "A) To execute code based on a condition",
    },
    {
      id: 13,
      question: "Which comparison operator checks for inequality?",
      answers: ["A) !=", "B) ==", "C) >=", "D) <="],
      correctAnswer: "A) !=",
    },
    {
      id: 14,
      question: "What does the 'else' statement do in an if-else construct?",
      answers: [
        "A) Provides an alternative set of instructions if the if condition is false",
        "B) Executes code before the if condition",
        "C) Allows multiple conditions to be checked",
        "D) Stops the execution of the script",
      ],
      correctAnswer:
        "A) Provides an alternative set of instructions if the if condition is false",
    },
    {
      id: 15,
      question: "How is an 'if-else if-else' statement structured?",
      answers: [
        "A) if (condition) { code } else if (condition) { code } else { code }",
        "B) if (condition) { code } else { code }",
        "C) if (condition) { code } else if (condition) { code }",
        "D) if (condition) { code }",
      ],
      correctAnswer:
        "A) if (condition) { code } else if (condition) { code } else { code }",
    },
    {
      id: 16,
      question: "What is the syntax of a 'for loop' in JavaScript?",
      answers: [
        "A) for (initialization; condition; increment) { code }",
        "B) for (condition; increment) { code }",
        "C) for (initialization; condition) { code; increment }",
        "D) for (initialization; code; increment) { condition }",
      ],
      correctAnswer: "A) for (initialization; condition; increment) { code }",
    },
    {
      id: 17,
      question: "How do you decrease the value of a variable in a 'for loop'?",
      answers: [
        "A) Using decrement operator (i--)",
        "B) Using increment operator (i++)",
        "C) Using modulus operator (i %= 2)",
        "D) Using addition operator (i += 2)",
      ],
      correctAnswer: "A) Using decrement operator (i--)",
    },
    {
      id: 18,
      question: "What does a nested loop in JavaScript do?",
      answers: [
        "A) Executes one loop inside another loop",
        "B) Stops the execution of the outer loop",
        "C) Increases the efficiency of a single loop",
        "D) Reduces the number of iterations in a loop",
      ],
      correctAnswer: "A) Executes one loop inside another loop",
    },
    {
      id: 19,
      question:
        "What will the following code output? for (var i = 1; i <= 3; i++) { for (var j = 1; j <= 3; j++) { document.write('i: ' + i + ' j: ' + j + '<br>'); } document.write('<br>'); }",
      answers: [
        "A) Values of i and j for all combinations",
        "B) Only values of i",
        "C) Only values of j",
        "D) Syntax error",
      ],
      correctAnswer: "A) Values of i and j for all combinations",
    },
    {
      id: 20,
      question:
        "How do you declare an array with initial values in JavaScript?",
      answers: [
        "A) var arr = [1, 2, 3];",
        "B) var arr = new Array(); arr[0] = 1; arr[1] = 2;",
        "C) var arr = Array(1, 2, 3);",
        "D) var arr = {1, 2, 3};",
      ],
      correctAnswer: "A) var arr = [1, 2, 3];",
    },
    {
      id: 21,
      question:
        "What is the correct way to access the first element of an array in JavaScript?",
      answers: ["A) arr[0]", "B) arr[1]", "C) arr.first()", "D) arr.get(0)"],
      correctAnswer: "A) arr[0]",
    },
    {
      id: 22,
      question:
        "What will be the output of this code? var arr = [10, 20, 30]; document.write(arr[2]);",
      answers: ["A) 30", "B) 20", "C) 10", "D) Undefined"],
      correctAnswer: "A) 30",
    },
    {
      id: 23,
      question: "How can you add elements to an array after initialization?",
      answers: [
        "A) Using arr.push() method",
        "B) Using arr.add() method",
        "C) Using arr.insert() method",
        "D) Using arr.append() method",
      ],
      correctAnswer: "A) Using arr.push() method",
    },
    {
      id: 24,
      question: "What will be the result of this comparison? 5 == '5'",
      answers: ["A) true", "B) false", "C) Error", "D) undefined"],
      correctAnswer: "A) true",
    },
    {
      id: 25,
      question: "How do you declare a function in JavaScript?",
      answers: [
        "A) function name() { code }",
        "B) func name() { code }",
        "C) declare name() { code }",
        "D) function: name() { code }",
      ],
      correctAnswer: "A) function name() { code }",
    },
    {
      id: 26,
      question: "What is the purpose of the 'return' statement in a function?",
      answers: [
        "A) To output a value from the function",
        "B) To stop the function execution",
        "C) To initialize variables",
        "D) To call another function",
      ],
      correctAnswer: "A) To output a value from the function",
    },
    {
      id: 27,
      question:
        "What does the 'calcBalance' function do in the provided example?",
      answers: [
        "A) Subtracts bill from amount_rcvd and returns the result",
        "B) Adds bill to amount_rcvd and returns the result",
        "C) Prints the bill amount",
        "D) Sets the bill amount to 0",
      ],
      correctAnswer:
        "A) Subtracts bill from amount_rcvd and returns the result",
    },
    {
      id: 28,
      question: "What is the role of 'arguments' in a JavaScript function?",
      answers: [
        "A) To pass values into the function",
        "B) To define the function scope",
        "C) To declare global variables",
        "D) To call other functions",
      ],
      correctAnswer: "A) To pass values into the function",
    },
    {
      id: 29,
      question:
        "What will the following code output? function multiply(a, b) { return a * b; } document.write(multiply(5, 3));",
      answers: ["A) 15", "B) 8", "C) 5", "D) Error"],
      correctAnswer: "A) 15",
    },
    {
      id: 30,
      question:
        "How do you call a function named 'calculateTotal' with arguments 100 and 50?",
      answers: [
        "A) calculateTotal(100, 50);",
        "B) call calculateTotal(100, 50);",
        "C) calculateTotal 100, 50;",
        "D) call calculateTotal 100, 50;",
      ],
      correctAnswer: "A) calculateTotal(100, 50);",
    },
    {
      id: 31,
      question:
        "What is the output of the following code snippet? var x = '10'; var y = 5; document.write(x + y);",
      answers: ["A) 105", "B) 15", "C) 105 is a string", "D) 10 + 5"],
      correctAnswer: "A) 105",
    },
    {
      id: 32,
      question:
        "What will the following code output? var num = 7; document.write(num > 5 ? 'Yes' : 'No');",
      answers: ["A) Yes", "B) No", "C) Error", "D) Undefined"],
      correctAnswer: "A) Yes",
    },
    {
      id: 33,
      question:
        "Which operator is used to compare two values for equality and type in JavaScript?",
      answers: ["A) ===", "B) ==", "C) =", "D) !="],
      correctAnswer: "A) ===",
    },
    {
      id: 34,
      question: "How do you handle multiple conditions in JavaScript?",
      answers: [
        "A) Using if-else if-else statements",
        "B) Using multiple if statements",
        "C) Using nested for loops",
        "D) Using switch-case statements",
      ],
      correctAnswer: "A) Using if-else if-else statements",
    },
    {
      id: 35,
      question:
        "What will the following code output? for (var i = 0; i < 3; i++) { document.write(i + '<br>'); }",
      answers: [
        "A) 0<br>1<br>2<br>",
        "B) 1<br>2<br>",
        "C) 0<br>1<br>2<br>3<br>",
        "D) 0<br>1<br>2<br>3<br>4<br>",
      ],
      correctAnswer: "A) 0<br>1<br>2<br>",
    },
    {
      id: 36,
      question: "What is the purpose of using a 'while' loop?",
      answers: [
        "A) To execute code as long as a condition is true",
        "B) To execute code a fixed number of times",
        "C) To define a function",
        "D) To declare variables",
      ],
      correctAnswer: "A) To execute code as long as a condition is true",
    },
    {
      id: 37,
      question:
        "How do you create a function with no return value in JavaScript?",
      answers: [
        "A) function myFunction() { code }",
        "B) function myFunction() { return; }",
        "C) function myFunction() { return null; }",
        "D) function myFunction() { return undefined; }",
      ],
      correctAnswer: "A) function myFunction() { code }",
    },
    {
      id: 38,
      question:
        "What is the result of the following code? function add(x, y) { return x + y; } var result = add(3, 4); document.write(result);",
      answers: ["A) 7", "B) 34", "C) 3 4", "D) 12"],
      correctAnswer: "A) 7",
    },
    {
      id: 39,
      question:
        "How do you declare a function that accepts an unlimited number of arguments?",
      answers: [
        "A) function myFunction(...args) { code }",
        "B) function myFunction(args) { code }",
        "C) function myFunction(arg1, arg2) { code }",
        "D) function myFunction() { code }",
      ],
      correctAnswer: "A) function myFunction(...args) { code }",
    },
    {
      id: 40,
      question:
        "What will the following code output? for (var i = 5; i > 0; i -= 2) { document.write(i + '<br>'); }",
      answers: [
        "A) 5<br>3<br>1<br>",
        "B) 5<br>3<br>",
        "C) 5<br>3<br>1<br>0<br>",
        "D) 5<br>",
      ],
      correctAnswer: "A) 5<br>3<br>1<br>",
    },
    {
      id: 41,
      question: "What does the 'document.write' method do?",
      answers: [
        "A) Writes text to the HTML document",
        "B) Displays an alert message",
        "C) Logs text to the console",
        "D) Modifies an HTML element",
      ],
      correctAnswer: "A) Writes text to the HTML document",
    },
    {
      id: 42,
      question:
        "How do you handle a case where multiple conditions need to be checked?",
      answers: [
        "A) Using if-else if-else statements",
        "B) Using nested if statements",
        "C) Using switch-case statements",
        "D) Using a single if statement",
      ],
      correctAnswer: "A) Using if-else if-else statements",
    },
    {
      id: 43,
      question:
        "Which operator is used to combine multiple conditions in an 'if' statement?",
      answers: ["A) && (AND)", "B) || (OR)", "C) ! (NOT)", "D) == (EQUALITY)"],
      correctAnswer: "A) && (AND)",
    },
    {
      id: 44,
      question:
        "What is the output of this function call? function multiply(a, b) { return a * b; } multiply(4, 5);",
      answers: ["A) 20", "B) 9", "C) 45", "D) 40"],
      correctAnswer: "A) 20",
    },
  ],
};
