import React from 'react';
import Quiz from './Quiz'; // Import the Quiz component

function ObjectsPage() {
  // Define an array of questions for the quiz
  const questions = [
    {
      question: "What is an object in JavaScript?",
      options: ["A type of function", "A collection of key-value pairs", "A type of loop"],
      correctAnswer: "A collection of key-value pairs"
    },
    {
      question: "How do you access a property of an object?",
      options: ["Using dot notation", "Using square brackets", "Both"],
      correctAnswer: "Both"
    },
    {
      question: "Which data types can be used as values in an object?",
      options: ["Strings", "Numbers", "Arrays", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "How do you add a new property to an object?",
      options: ["Using the assign method", "Using dot notation", "Using the push method"],
      correctAnswer: "Using dot notation"
    },
    {
      question: "What keyword is used to delete a property from an object?",
      options: ["remove", "delete", "erase"],
      correctAnswer: "delete"
    },
    // Add more questions as needed
  ];

  return (
    <div className="mb-5">
      {/* Title and Introduction */}
      <h2 className="pt-5 row justify-content-center">Objects</h2>
      <p>
        Objects are one of the fundamental data types in JavaScript, and they play a central role in the language.
        An object is a collection of key-value pairs, where each key is a unique identifier (also called a property) and each value is the data associated with that key.
        Objects in JavaScript are versatile and can represent complex data structures, including arrays, functions, and even other objects.
      </p>
      <p>
        Objects are defined using curly braces <code>{'{}'}</code>, with key-value pairs separated by commas.
        Keys are usually strings, but they can also be numbers or symbols. Values can be any valid JavaScript data type, including strings, numbers, booleans, arrays, functions, and objects.
      </p>
      <p>
        Here's an example of defining and accessing properties of an object in JavaScript:
      </p>
      <pre className="card shadow hover-card">
        {`
        // Define an object named person with properties name, age, and isStudent
        const person = {
          name: 'John',
          age: 30,
          isStudent: false
        };

        // Access properties of the person object using dot notation or bracket notation
        console.log(person.name); // Output: John
        console.log(person['age']); // Output: 30

        // Update properties of the person object
        person.age = 35;
        person['isStudent'] = true;

        // Add new properties to the person object
        person.city = 'New York';
        person['occupation'] = 'Software Engineer';

        // Delete a property from the person object
        delete person.isStudent;
        `}
      </pre>
      <p className="mb-5">
        Objects are used extensively in JavaScript for storing and manipulating data, and they provide a powerful way to organize and structure information in your code.
        Understanding how to work with objects is essential for becoming proficient in JavaScript programming.
      </p>

      {/* Render the Quiz component with the questions */}
      <h1>Test Your Knowledge</h1>
      <Quiz questions={questions} />
      
      {/* References */}
      <h2>References</h2>
      <ul>
        <li>
          Mozilla Developer Network (MDN) - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects">Working with objects</a>
        </li>
        <li>
          W3Schools - <a href="https://www.w3schools.com/js/js_objects.asp">JavaScript Objects</a>
        </li>
      </ul>
    </div>
  );
}

export default ObjectsPage;
