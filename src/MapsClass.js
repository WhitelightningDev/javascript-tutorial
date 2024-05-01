import React, { Component } from 'react';
import Quiz from './Quiz'; // Import the Quiz component

class MapsClass extends Component {
  render() {
    // Define an array of quiz questions
    const questions = [
      {
        question: "What is the purpose of maps in JavaScript?",
        options: ["To store key-value pairs", "To perform mathematical operations", "To create objects"],
        correctAnswer: "To store key-value pairs"
      },
      {
        question: "What data types can keys have in a map?",
        options: ["Strings only", "Numbers only", "Any data type"],
        correctAnswer: "Any data type"
      },
      {
        question: "How do you add a key-value pair to a map?",
        options: ["Using the set() method", "Using the add() method", "Using the push() method"],
        correctAnswer: "Using the set() method"
      },
      {
        question: "How do you retrieve a value from a map?",
        options: ["Using the get() method", "Using dot notation", "Using bracket notation"],
        correctAnswer: "Using the get() method"
      },
      {
        question: "How do you check if a key exists in a map?",
        options: ["Using the has() method", "Using the contains() method", "Using the exists() method"],
        correctAnswer: "Using the has() method"
      },
    ];

    return (
      <div className="mb-5">
        <h2 className="pt-5 row justify-content-center">Maps in JavaScript</h2>
        <p>
          Maps are a built-in data structure in JavaScript that allow you to store key-value pairs.
          Unlike objects, which only allow keys to be strings or symbols, maps can have keys of any data type.
          This makes maps more flexible for certain use cases.
        </p>
        <p>
          Here's how you can create a map in JavaScript:
        </p>
        <pre>
          {`
          // Creating a map
          let myMap = new Map();

          // Adding key-value pairs to the map
          myMap.set('name', 'John');
          myMap.set(1, 'One');
          myMap.set(true, 'True');

          // Accessing values from the map
          console.log(myMap.get('name')); // Output: John
          console.log(myMap.get(1));      // Output: One
          console.log(myMap.get(true));   // Output: True

          // Checking if a key exists in the map
          console.log(myMap.has('name')); // Output: true

          // Deleting a key-value pair from the map
          myMap.delete('name');
          console.log(myMap.has('name')); // Output: false

          // Getting the size of the map
          console.log(myMap.size);        // Output: 2
          `}
        </pre>
        <p>
          Maps offer methods for adding, retrieving, checking for the presence of, and deleting key-value pairs, as well as getting the size of the map.
          They provide a powerful way to manage data in JavaScript applications.
        </p>

        {/* Render the Quiz component with the questions */}
        <Quiz questions={questions} />

      

        {/* References */}
        <h2>References</h2>
        <ul>
          <li>
            MDN Web Docs - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">Map</a>
          </li>
          <li>
            W3Schools - <a href="https://www.w3schools.com/jsref/jsref_map.asp">JavaScript Map Reference</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MapsClass;
