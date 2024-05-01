import React, { Component } from 'react';
import Quiz from './Quiz'; // Import the Quiz component

class JQueryClass extends Component {
  render() {
    // Define an array of quiz questions for jQuery
    const questions = [
      {
        question: "What is jQuery?",
        options: ["A programming language", "A JavaScript library", "A database management system"],
        correctAnswer: "A JavaScript library"
      },
      {
        question: "Which version of jQuery is included in the code snippet?",
        options: ["2.2.4", "3.6.0", "1.12.4"],
        correctAnswer: "3.6.0"
      },
      {
        question: "What does the code $('#mainHeading') select?",
        options: ["The main heading of the page", "All elements with the ID 'mainHeading'", "The first heading element on the page"],
        correctAnswer: "The main heading of the page"
      },
      {
        question: "What does the code $('.yellow') select?",
        options: ["All elements with the class 'yellow'", "All paragraph elements with the class 'yellow'", "All elements with the class 'yellow' and the tag 'div'"],
        correctAnswer: "All elements with the class 'yellow'"
      },
      {
        question: "What does the code $('*') select?",
        options: ["All elements in the document", "The first element in the document", "All elements with a tag name of '*'"],
        correctAnswer: "All elements in the document"
      },
      {
        question: "What does the code $('button').click(function() { alert('Button clicked!'); }); do?",
        options: ["Hides all buttons on the page", "Adds a click event listener to all buttons on the page", "Creates a new button element"],
        correctAnswer: "Adds a click event listener to all buttons on the page"
      },
      {
        question: "What does the code $('<p>This is a new paragraph.</p>').text() do?",
        options: ["Appends a new paragraph to the page", "Sets the text content of the new paragraph to 'This is a new paragraph.'", "Selects all paragraph elements on the page"],
        correctAnswer: "Sets the text content of the new paragraph to 'This is a new paragraph.'"
      }
    ];

    return (
      <div className="pt-5 mb-5 row">
        <h2 className="row justify-content-center">jQuery in JavaScript</h2>
        <p>
          jQuery is a fast, small, and feature-rich JavaScript library. It simplifies tasks like HTML document traversal and manipulation, event handling, and animation with an easy-to-use API that works across a multitude of browsers.
        </p>
        <p>
          Here's how you can include jQuery in your HTML file:
        </p>
        <pre>
          {`
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
          `}
        </pre>
        <p>
          Once jQuery is included, you can start using its features. Here are a few examples:
        </p>
        <pre>
          {`
          // Hide an element with ID "myElement"
          $('#myElement').hide();

          // Add a click event listener to an element with class "myButton"
          $('.myButton').click(function() {
            alert('Button clicked!');
          });

          // Fade out an element with ID "myElement" over 1 second
          $('#myElement').fadeOut(1000);
          `}
        </pre>
        <p>
          jQuery simplifies many common tasks in JavaScript, making it a popular choice for web development.
        </p>

        <p>
          These are some common built-in functions in jQuery:
        </p>

        <ul>
          <li><strong>after():</strong> Inserts content after the selected HTML element.</li>
          <li><strong>append():</strong> Inserts content at the end of the selected element.</li>
          <li><strong>before():</strong> Inserts content before the selected HTML element.</li>
          <li><strong>empty():</strong> Removes all child elements from the selected element, but not the element itself.</li>
          <li><strong>prepend():</strong> Inserts content at the beginning of the selected element.</li>
          <li><strong>text():</strong> Sets or returns the text content of the selected element.</li>
          <li><strong>val():</strong> Sets or returns the value of a form field.</li>
          <li><strong>remove():</strong> Removes the selected element, including its child elements.</li>
        </ul>

        <p>
          These functions provide convenient ways to manipulate HTML elements and their content using jQuery.
        </p>

        {/* Render the Quiz component with the questions */}
        <Quiz questions={questions} />

      
        {/* References */}
        <h2>References</h2>
        <ul>
          <li>
            jQuery Official Website - <a href="https://jquery.com/">https://jquery.com/</a>
          </li>
          <li>
            W3Schools jQuery Tutorial - <a href="https://www.w3schools.com/jquery/">https://www.w3schools.com/jquery/</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default JQueryClass;
