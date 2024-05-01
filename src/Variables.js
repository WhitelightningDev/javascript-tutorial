import React from 'react';
import { Card } from 'react-bootstrap';
import Quiz from './Quiz'; // Import the Quiz component

function VariablesPage() {
  // Define an array of questions for the quiz
  const questions = [
    {
      question: "What keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const"],
      correctAnswer: "var"
    },
    {
      question: "Which keyword is used to declare a variable that cannot be re-declared?",
      options: ["let", "const"],
      correctAnswer: "const"
    },
    {
      question: "What is the result of 10 + '5' in JavaScript?",
      options: ["105", "15", "Error"],
      correctAnswer: "105"
    },
    {
      question: "What will be logged to the console: console.log(5 == '5')?",
      options: ["true", "false"],
      correctAnswer: "true"
    },
    // Add more questions as needed
  ];

  return (
    <div className="mb-5">
      {/* Title and Introduction */}
      <h2 className="pt-5 mb-3 row justify-content-center">Variables</h2>
      <p>In JavaScript, variables are used to store data values. You can think of them as containers that hold information that can be referenced and manipulated throughout your code.</p>
      <p>To declare a variable in JavaScript, you use the `var`, `let`, or `const` keywords followed by the name of the variable:</p>
      
      {/* Code Example */}
      <Card>
        <Card.Body>
          <pre>
            {`
            // Using var
            var x = 10;

            // Using let
            let y = 'Hello, World!';

            // Using const
            const PI = 3.14;
            `}
          </pre>
        </Card.Body>
      </Card>
      
      {/* Variable Types */}
      <p>Variables declared with `var` can be re-declared and updated throughout your code. Variables declared with `let` can be updated but not re-declared, while variables declared with `const` cannot be updated or re-declared once they are initialized.</p>
      <p>JavaScript is a dynamically-typed language, meaning you don't need to explicitly specify the data type of a variable when declaring it. The data type of a variable is determined automatically based on the value assigned to it.</p>
      <p>Here are some common data types that variables can hold in JavaScript:</p>
      <ul>
        <li>Number: Used to represent numeric values like integers and floating-point numbers. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">Read more</a></li>
        <li>String: Used to represent text values. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">Read more</a></li>
        <li>Boolean: Used to represent true/false values. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">Read more</a></li>
        <li>Array: Used to store multiple values in a single variable. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Read more</a></li>
        <li>Object: Used to store key-value pairs of data. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects">Read more</a></li>
        <li>Undefined: Used to represent the absence of a value. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined">Read more</a></li>
        <li>Null: Used to represent the absence of any value or object. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">Read more</a></li>
      </ul>
      <p>These are just a few basics about variables in JavaScript. As you continue learning, you'll discover more about how to use variables effectively in your code.</p>

      {/* Render the Quiz component */}
      <h1>Test Your Knowledge</h1>
      <Quiz questions={questions} />
      
      {/* References */}
      <h2>References</h2>
      <ul>
        <li>
          Mozilla Developer Network (MDN) - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variables">Variables</a>
        </li>
        <li>
          W3Schools - <a href="https://www.w3schools.com/js/js_variables.asp">JavaScript Variables</a>
        </li>
      </ul>
    </div>
  );
}

export default VariablesPage;
