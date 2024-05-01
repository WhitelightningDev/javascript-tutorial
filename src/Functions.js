import React from 'react';
import Quiz from './Quiz'; // Import the Quiz component

function FunctionsPage() {
  // Define an array of questions for the quiz
  const questions = [
    {
      question: "What keyword is used to define a function in JavaScript?",
      options: ["function", "() =>", "def"],
      correctAnswer: "function"
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: ["call myFunction()", "myFunction()", "run myFunction()"],
      correctAnswer: "myFunction()"
    },
    {
      question: "What does the 'return' keyword do in a function?",
      options: ["Defines a new variable", "Stops the execution of the function and returns a value", "Prints a message to the console"],
      correctAnswer: "Stops the execution of the function and returns a value"
    },
    {
      question: "Which of the following is NOT a valid way to define a function in JavaScript?",
      options: ["function greet() {}", "() => {}", "let greet = function() {}"],
      correctAnswer: "() -> {}"
    },
    {
      question: "What is the purpose of parameters in a function?",
      options: ["To store the function's output", "To specify the return value of the function", "To accept input values when the function is called"],
      correctAnswer: "To accept input values when the function is called"
    },
    // Add more questions as needed
  ];

  return (
    <div className="mb-5">
      {/* Title and Introduction */}
      <h2 className="pt-5 row justify-content-center">Functions</h2>
      <p>
        Functions are one of the most important concepts in JavaScript. They are reusable blocks of code that perform a specific task.
        Functions allow you to break your code into smaller, more manageable pieces, making it easier to read, understand, and maintain.
      </p>
      <p>
        In JavaScript, functions can be defined using the <code>function</code> keyword, arrow functions (<code>() = > </code>), or function expressions.
        They can accept parameters, which are values that are passed into the function, and return a value or perform an action.
      </p>
      <p>
        Here's an example of defining and using a function in JavaScript:
      </p>
      <pre className="card shadow hover-card">
        {`
        // Define a function named greet that accepts a parameter called name
        function greet(name) {
          // Return a greeting message with the provided name
          return 'Hello, ' + name + '!';
        }

        // Call the greet function with the argument 'John' and store the result in a variable
        let message = greet('John');

        // Print the message to the console
        console.log(message); // Output: Hello, John!
        `}
      </pre>
      <p className="mb-5">
        This is just a basic overview of functions in JavaScript. They are versatile and can be used in various ways, including defining reusable code blocks, organizing code into modules, and handling asynchronous tasks.
      </p>

      {/* Render the Quiz component */}
      <h1>Test Your Knowledge</h1>
      <Quiz questions={questions} />
      
      {/* References */}
      <h2>References</h2>
      <ul>
        <li>
          Mozilla Developer Network (MDN) - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">Functions</a>
        </li>
        <li>
          W3Schools - <a href="https://www.w3schools.com/js/js_functions.asp">JavaScript Functions</a>
        </li>
      </ul>
    </div>
  );
}

export default FunctionsPage;
