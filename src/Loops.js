import React from 'react';
import Quiz from './Quiz'; // Import the Quiz component

function LoopsPage() {
  // Define an array of questions for the quiz
  const questions = [
    {
      question: "Which type of loop in JavaScript executes a block of code a specified number of times?",
      options: ["for loop", "while loop", "do...while loop", "for...in loop"],
      correctAnswer: "for loop"
    },
    {
      question: "Which type of loop in JavaScript executes a block of code while a specified condition is true?",
      options: ["for loop", "while loop", "do...while loop", "for...in loop"],
      correctAnswer: "while loop"
    },
    {
      question: "Which type of loop in JavaScript executes a block of code at least once, and then repeats the loop as long as a specified condition is true?",
      options: ["for loop", "while loop", "do...while loop", "for...in loop"],
      correctAnswer: "do...while loop"
    },
    {
      question: "Which type of loop in JavaScript iterates over the properties of an object?",
      options: ["for loop", "while loop", "do...while loop", "for...in loop"],
      correctAnswer: "for...in loop"
    },
    {
      question: "Which type of loop in JavaScript iterates over the values of an iterable object, such as an array or string?",
      options: ["for loop", "while loop", "do...while loop", "for...of loop"],
      correctAnswer: "for...of loop"
    }
  ];

  return (
    <div className="mb-4">
      {/* Title and Introduction */}
      <h2 className="pt-5 row justify-content-center">Loops</h2>
      <p>
        Loops are a fundamental concept in programming that allow you to execute a block of code repeatedly.
        They are commonly used to iterate over arrays, perform repetitive tasks, and control the flow of a program.
      </p>
      <p>
        In JavaScript, there are several types of loops available, including:
      </p>
      <ul className="pt-2">
        <li><strong>for loop:</strong> Executes a block of code a specified number of times. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for">Read more</a></li>
        <li><strong>while loop:</strong> Executes a block of code while a specified condition is true. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while">Read more</a></li>
        <li><strong>do...while loop:</strong> Executes a block of code at least once, and then repeats the loop as long as a specified condition is true. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while">Read more</a></li>
        <li><strong>for...in loop:</strong> Iterates over the properties of an object. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">Read more</a></li>
        <li><strong>for...of loop:</strong> Iterates over the values of an iterable object, such as an array or string. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">Read more</a></li>
      </ul>
      <p>
        Here's an example of using a for loop to iterate over an array and print each element to the console:
      </p>
      <div class="pt-3 pb-5 row justify-content-center"><iframe title="lotti" src="https://lottie.host/embed/3b09c185-50d0-433d-aa0f-d60cdaab4bf5/2SHucwVuF9.json"></iframe></div>
      
      <pre className="card shadow">
        {`
        // Example of a for loop
        let fruits = ['apple', 'banana', 'orange'];
        for (let i = 0; i < fruits.length; i++) {
          console.log(fruits[i]);
        }
        `}
      </pre>
      <p>
        This is just a basic overview of loops in JavaScript. They are powerful tools that allow you to automate repetitive tasks and make your code more efficient.
      </p>

      {/* Render the Quiz component */}
      <h1>Test Your Knowledge</h1>
      <Quiz questions={questions} />
      
      {/* References */}
      <h2>References</h2>
      <ul>
        <li>
          Mozilla Developer Network (MDN) - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration">Loops and iteration</a>
        </li>
        <li>
          W3Schools - <a href="https://www.w3schools.com/js/js_loop_for.asp">JavaScript for Loop</a>
        </li>
      </ul>
    </div>
  );
}

export default LoopsPage;
