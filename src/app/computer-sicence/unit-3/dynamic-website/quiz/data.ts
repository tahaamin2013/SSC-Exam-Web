export const quiz = {
  totalQuestions: 34,
  questions: [
    {
      id: 1,
      question: "What is a dynamic website?",
      answers: [
        "A) A website that displays fixed content",
        "B) A website that generates content in real-time based on user input or other variables",
        "C) A website that does not interact with users",
        "D) A website that only uses HTML",
      ],
      correctAnswer:
        "B) A website that generates content in real-time based on user input or other variables",
    },
    {
      id: 2,
      question:
        "Which scripting language is typically used for client-side scripting in dynamic websites?",
      answers: ["A) Python", "B) JavaScript", "C) Ruby", "D) PHP"],
      correctAnswer: "B) JavaScript",
    },
    {
      id: 3,
      question: "What is DOM manipulation?",
      answers: [
        "A) Modifying the server-side code",
        "B) Changing the content and structure of a webpage in real-time",
        "C) Writing static HTML",
        "D) Formatting text with CSS",
      ],
      correctAnswer:
        "B) Changing the content and structure of a webpage in real-time",
    },
    {
      id: 4,
      question:
        "How does event-driven programming enhance user interaction in dynamic websites?",
      answers: [
        "A) By using server-side scripts",
        "B) By handling user actions and events asynchronously",
        "C) By preloading content",
        "D) By generating static content",
      ],
      correctAnswer: "B) By handling user actions and events asynchronously",
    },
    {
      id: 5,
      question:
        "What does asynchronous data fetching allow in dynamic websites?",
      answers: [
        "A) Immediate page reload",
        "B) Synchronous data loading",
        "C) Seamless content loading without blocking user interaction",
        "D) Static data display",
      ],
      correctAnswer:
        "C) Seamless content loading without blocking user interaction",
    },
    {
      id: 6,
      question:
        "In the context of dynamic websites, what is the role of JavaScript?",
      answers: [
        "A) To manage server-side databases",
        "B) To handle client-side interactions and update content dynamically",
        "C) To create fixed content pages",
        "D) To format text and styles",
      ],
      correctAnswer:
        "B) To handle client-side interactions and update content dynamically",
    },
    {
      id: 7,
      question:
        "What is the primary purpose of the `changeOrder` function in the provided example?",
      answers: [
        "A) To submit a form",
        "B) To update the displayed order based on user selection",
        "C) To calculate the total price",
        "D) To reload the page",
      ],
      correctAnswer: "B) To update the displayed order based on user selection",
    },
    {
      id: 8,
      question:
        "How does the `onchange` attribute work in the `<select>` element?",
      answers: [
        "A) It triggers a function when the page loads",
        "B) It executes a function when the value of the `<select>` element changes",
        "C) It sets the default value of the `<select>` element",
        "D) It styles the `<select>` element",
      ],
      correctAnswer:
        "B) It executes a function when the value of the `<select>` element changes",
    },
    {
      id: 9,
      question:
        "What is the purpose of the `document.getElementById` method in the context of dynamic websites?",
      answers: [
        "A) To create new HTML elements",
        "B) To select and manipulate elements based on their ID",
        "C) To delete HTML elements",
        "D) To add new CSS styles",
      ],
      correctAnswer: "B) To select and manipulate elements based on their ID",
    },
    {
      id: 10,
      question: "What does the `innerHTML` property do in JavaScript?",
      answers: [
        "A) It retrieves the style of an element",
        "B) It sets or gets the HTML content inside an element",
        "C) It changes the visibility of an element",
        "D) It attaches event listeners to elements",
      ],
      correctAnswer: "B) It sets or gets the HTML content inside an element",
    },
    {
      id: 11,
      question:
        "How does DOM manipulation contribute to real-time updates in dynamic websites?",
      answers: [
        "A) By reloading the entire webpage",
        "B) By modifying the HTML and CSS in response to user interactions",
        "C) By running server-side scripts",
        "D) By pre-rendering content",
      ],
      correctAnswer:
        "B) By modifying the HTML and CSS in response to user interactions",
    },
    {
      id: 12,
      question: "What is event-driven programming?",
      answers: [
        "A) Programming that executes code based on time intervals",
        "B) Programming that responds to user actions or events",
        "C) Programming that preloads content",
        "D) Programming that generates static content",
      ],
      correctAnswer: "B) Programming that responds to user actions or events",
    },
    {
      id: 13,
      question:
        "What advantage does asynchronous data fetching provide for user experience?",
      answers: [
        "A) It forces a page reload",
        "B) It allows for smooth content updates without interrupting user interactions",
        "C) It eliminates the need for JavaScript",
        "D) It delays content updates",
      ],
      correctAnswer:
        "B) It allows for smooth content updates without interrupting user interactions",
    },
    {
      id: 14,
      question: "How can dynamic websites enhance user engagement?",
      answers: [
        "A) By providing static content only",
        "B) By offering interactive and personalized experiences",
        "C) By reducing content updates",
        "D) By avoiding client-side scripting",
      ],
      correctAnswer: "B) By offering interactive and personalized experiences",
    },
    {
      id: 15,
      question:
        "What is the academic significance of dynamic website creation?",
      answers: [
        "A) It focuses solely on visual design",
        "B) It bridges client-side and server-side technologies and facilitates scalable applications",
        "C) It simplifies content management without interaction",
        "D) It eliminates the need for HTML and CSS",
      ],
      correctAnswer:
        "B) It bridges client-side and server-side technologies and facilitates scalable applications",
    },
    {
      id: 16,
      question:
        "In the given example, what HTML element is used to allow user selection?",
      answers: [
        "A) `<input>`",
        "B) `<button>`",
        "C) `<select>`",
        "D) `<textarea>`",
      ],
      correctAnswer: "C) `<select>`",
    },
    {
      id: 17,
      question:
        "What does the `value` attribute of the `<option>` element specify?",
      answers: [
        "A) The display text of the option",
        "B) The unique identifier of the option",
        "C) The default selection",
        "D) The value that is sent to the server when the option is selected",
      ],
      correctAnswer:
        "D) The value that is sent to the server when the option is selected",
    },
    {
      id: 18,
      question:
        "Which JavaScript method is used to get the value of a selected option in a `<select>` element?",
      answers: [
        "A) `getValue()`",
        "B) `getElementById()`",
        "C) `querySelector()`",
        "D) `value`",
      ],
      correctAnswer: "D) `value`",
    },
    {
      id: 19,
      question:
        "What is the expected output when the `<select>` element&apos;svalue changes in the provided example?",
      answers: [
        "A) A new page is loaded",
        "B) The `order` value is displayed in the `result` paragraph",
        "C) The webpage is reloaded",
        "D) A server request is made",
      ],
      correctAnswer:
        "B) The `order` value is displayed in the `result` paragraph",
    },
    {
      id: 20,
      question:
        "How does the use of `innerHTML` in the `changeOrder` function affect the webpage?",
      answers: [
        "A) It modifies the style of the element",
        "B) It changes the HTML content of the `result` element",
        "C) It updates the CSS of the `order` element",
        "D) It triggers a server-side script",
      ],
      correctAnswer: "B) It changes the HTML content of the `result` element",
    },
    {
      id: 21,
      question:
        "What role does the `changeOrder` function play in the user experience of the dynamic website?",
      answers: [
        "A) It changes the layout of the page",
        "B) It updates the content based on user selection",
        "C) It validates user input",
        "D) It stores user data",
      ],
      correctAnswer: "B) It updates the content based on user selection",
    },
    {
      id: 22,
      question:
        "What is a key advantage of using JavaScript for dynamic content updates?",
      answers: [
        "A) It requires server-side processing",
        "B) It allows for immediate and interactive content changes without page reloads",
        "C) It reduces the need for HTML",
        "D) It simplifies database management",
      ],
      correctAnswer:
        "B) It allows for immediate and interactive content changes without page reloads",
    },
    {
      id: 23,
      question:
        "How does client-side scripting support the creation of scalable web applications?",
      answers: [
        "A) By processing data on the server",
        "B) By enabling real-time updates and interactions directly in the browser",
        "C) By managing server databases",
        "D) By generating static content",
      ],
      correctAnswer:
        "B) By enabling real-time updates and interactions directly in the browser",
    },
    {
      id: 24,
      question:
        "What is the significance of providing a foundation for modern web development frameworks in dynamic websites?",
      answers: [
        "A) It simplifies the design process",
        "B) It supports the development of complex and interactive web applications",
        "C) It eliminates the need for JavaScript",
        "D) It restricts the use of CSS",
      ],
      correctAnswer:
        "B) It supports the development of complex and interactive web applications",
    },
    {
      id: 25,
      question:
        "Which HTML element is used to display the result of the `changeOrder` function?",
      answers: ["A) `<h1>`", "B) `<p>`", "C) `<div>`", "D) `<span>`"],
      correctAnswer: "B) `<p>`",
    },
    {
      id: 26,
      question:
        "In the given example, what event triggers the `changeOrder` function?",
      answers: [
        "A) Page load",
        "B) Button click",
        "C) Selection change in the `<select>` element",
        "D) Form submission",
      ],
      correctAnswer: "C) Selection change in the `<select>` element",
    },
    {
      id: 27,
      question:
        "How does the `changeOrder` function interact with the `<select>` element?",
      answers: [
        "A) It changes the `<select>` element&apos;sstyle",
        "B) It retrieves and displays the selected value from the `<select>` element",
        "C) It creates new `<option>` elements",
        "D) It hides the `<select>` element",
      ],
      correctAnswer:
        "B) It retrieves and displays the selected value from the `<select>` element",
    },
    {
      id: 28,
      question:
        "What is the role of the `id` attribute in the `<select>` and `<p>` elements in the provided example?",
      answers: [
        "A) It applies styles to the elements",
        "B) It allows JavaScript to reference and manipulate the elements",
        "C) It sets the default values of the elements",
        "D) It validates user input",
      ],
      correctAnswer:
        "B) It allows JavaScript to reference and manipulate the elements",
    },
    {
      id: 29,
      question:
        "What is a key benefit of using JavaScript for real-time content updates on dynamic websites?",
      answers: [
        "A) It limits the interaction between the client and server",
        "B) It improves page load times by avoiding server requests",
        "C) It allows for instant content changes based on user interactions",
        "D) It restricts the use of HTML",
      ],
      correctAnswer:
        "C) It allows for instant content changes based on user interactions",
    },
    {
      id: 30,
      question:
        "How does the use of JavaScript in dynamic websites affect server-side processing?",
      answers: [
        "A) It eliminates the need for server-side processing",
        "B) It reduces the amount of server-side processing required by handling interactions on the client side",
        "C) It increases server load",
        "D) It handles all server-side logic",
      ],
      correctAnswer:
        "B) It reduces the amount of server-side processing required by handling interactions on the client side",
    },
    {
      id: 31,
      question:
        "What is the purpose of the `result` paragraph in the dynamic website example?",
      answers: [
        "A) To display a static message",
        "B) To show the result of the user&apos;sselection from the `<select>` element",
        "C) To create a new `<select>` element",
        "D) To style the webpage",
      ],
      correctAnswer:
        "B) To show the result of the user&apos;sselection from the `<select>` element",
    },
    {
      id: 32,
      question:
        "What is the academic significance of mastering dynamic website creation?",
      answers: [
        "A) It focuses on basic HTML and CSS skills",
        "B) It provides a foundation for understanding complex web development frameworks and interactive features",
        "C) It eliminates the need for client-side scripting",
        "D) It simplifies static content management",
      ],
      correctAnswer:
        "B) It provides a foundation for understanding complex web development frameworks and interactive features",
    },
    {
      id: 33,
      question:
        "In dynamic websites, why is JavaScript essential for real-time content updates?",
      answers: [
        "A) It handles server-side operations",
        "B) It allows for immediate updates to content and interactions based on user inputs",
        "C) It simplifies HTML formatting",
        "D) It manages database connections",
      ],
      correctAnswer:
        "B) It allows for immediate updates to content and interactions based on user inputs",
    },
    {
      id: 34,
      question:
        "What is the expected outcome when a user selects an option in the `<select>` dropdown in the provided example?",
      answers: [
        "A) The page reloads",
        "B) The selected option&apos;svalue is displayed in the `result` paragraph",
        "C) A new page is opened",
        "D) The content of the `<select>` element is changed",
      ],
      correctAnswer:
        "B) The selected option&apos;svalue is displayed in the `result` paragraph",
    },
  ],
};
