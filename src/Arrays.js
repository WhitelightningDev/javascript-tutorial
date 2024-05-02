import React from 'react';
import Quiz from './Quiz'; // Import the Quiz component

// Component for Arrays page
function ArraysPage() {
  // Define an array of questions for the quiz
  const questions = [
    {
      question: "What are arrays used for in JavaScript?",
      options: ["To store multiple values in a single variable", "To perform mathematical operations", "To create objects"],
      correctAnswer: "To store multiple values in a single variable"
    },
    // More quiz questions...
  ];

  return (
    <div className="mb-5">
      {/* Title and Introduction */}
      <h2 className="pt-5 row justify-content-center">Arrays</h2>
      <p>
        Arrays in JavaScript are used to store multiple values in a single variable.
        They are a special type of object that holds a collection of elements.
        Each element in an array has a numeric index, starting from 0.
      </p>
      <p>
        Here's an example of how you can create and manipulate arrays in JavaScript:
      </p>
      {/* Example code */}
      <pre className="card shadow hover-card">
        {`
        // Creating an array
        let fruits = ['apple', 'banana', 'orange'];

        // Accessing elements in an array
        console.log(fruits[0]); // Output: 'apple'

        // Modifying elements in an array
        fruits[1] = 'grape';
        console.log(fruits); // Output: ['apple', 'grape', 'orange']

        // Adding elements to the end of an array
        fruits.push('kiwi');
        console.log(fruits); // Output: ['apple', 'grape', 'orange', 'kiwi']

        // Removing elements from the end of an array
        fruits.pop();
        console.log(fruits); // Output: ['apple', 'grape', 'orange']

        // Iterating over an array
        fruits.forEach(fruit => console.log(fruit));
        `}
      </pre>
      <p className="pb-4">
        This is just a basic overview of arrays in JavaScript. There are many other methods and operations that you can perform on arrays to manipulate and access their elements.
      </p>

      {/* Render the Quiz component with the questions */}
      <h1>Test Your Knowledge</h1>
      <Quiz questions={questions} />

      {/* References */}
      <h2>References</h2>
      <ul>
        <li>
          MDN Web Docs - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a>
        </li>
        <li>
          W3Schools - <a href="https://www.w3schools.com/js/js_arrays.asp">JavaScript Arrays</a>
        </li>
      </ul>
    </div>
  );
}

export default ArraysPage;
