import React, { Component } from 'react';
import Quiz from './Quiz'; // Import the Quiz component


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkTheme: false // Initial theme is light
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme // Toggle the theme
    }));
  }

  render() {
    // Define an array of quiz questions for events
    const questions = [
      {
        question: "What are events in JavaScript?",
        options: ["Functions", "Actions triggered by user interactions or browser actions", "Variables"],
        correctAnswer: "Actions triggered by user interactions or browser actions"
      },
      {
        question: "How can you attach an event listener to an HTML element?",
        options: ["Using the attachEvent() method", "Using the addEventListener() method", "Using the listen() method"],
        correctAnswer: "Using the addEventListener() method"
      },
      {
        question: "Which of the following is NOT a standard JavaScript event?",
        options: ["click", "hover", "keypress"],
        correctAnswer: "hover"
      },
      {
        question: "How do you prevent the default behavior of an event?",
        options: ["Using the stopEvent() method", "Using the preventDefault() method", "Using the cancelEvent() method"],
        correctAnswer: "Using the preventDefault() method"
      },
      {
        question: "What does the event.stopPropagation() method do?",
        options: ["Stops the event from bubbling up the DOM tree", "Stops the event from capturing down the DOM tree", "Stops the event from executing"],
        correctAnswer: "Stops the event from bubbling up the DOM tree"
      }
    ];

    return (
      <div className={this.state.isDarkTheme ? "dark-theme" : "light-theme"}>
        <div className="mb-5">
          <h2 className="pt-5 row justify-content-center">Events in JavaScript</h2>
          <p>
            Events in JavaScript are actions that occur as a result of user interactions or browser actions.
            Examples of events include clicking on an element, hovering over an element, pressing a key, and many more.
          </p>
          <p>
            Here are some common onclick events:
            <ul>
              <li>onclick - An HTML element has been clicked on</li>
              <li>onchange - An HTML element has been modified</li>
              <li>onmouseover - Mouse cursor moves over an HTML element</li>
              <li>onmouseout - Mouse cursor moves off an HTML element</li>
              <li>onkeydown - A keyboard button is pressed</li>
              <li>onload - HTML page has finished loading</li>
            </ul>
          </p>
          <p>
            Here's how you can handle events in JavaScript:
          </p>
          <pre>
            {`
            // Adding an event listener to an HTML element
            const button = document.getElementById('myButton');
            button.addEventListener('click', () => {
              alert('Button clicked!');
            });

            // Preventing the default behavior of an event
            const link = document.getElementById('myLink');
            link.addEventListener('click', (event) => {
              event.preventDefault();
              alert('Link clicked!');
            });
            `}
          </pre>
          <p>
            JavaScript provides methods for attaching event listeners to HTML elements, handling events, and controlling event propagation.
          </p>
          <h2 class="mb-3 mt-5">Click the radio button below to see what affect it has on the page.</h2>
          <input type="checkbox" className="theme-checkbox mb-5 mt-3" onChange={this.toggleTheme} />
          <h2>Hover over this button to see what the button does!</h2>
          <button class="mt-5 mb-5">
            <div>
              <span>
                <p>Hover Me</p><p>:)</p>
              </span>
            </div>
            <div>
              <span>
                <p>Thanks</p><p>:D</p>
              </span>
            </div>
          </button>

          {/* Render the Quiz component with the questions */}
          <Quiz questions={questions} />

          {/* References */}
          <h2>References</h2>
          <ul>
            <li>
              MDN Web Docs - <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a>
            </li>
            <li>
              W3Schools - <a href="https://www.w3schools.com/js/js_events.asp">JavaScript Events</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Events;
