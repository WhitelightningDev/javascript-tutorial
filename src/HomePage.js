/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="pt-5 col-md-12">
          <h1 className="text-center mb-4">Welcome to JavaScript Concepts</h1>
          {/* Embedded Lottie Animation */}
          <div className="row justify-content-center">
            <iframe src="https://lottie.host/embed/bc0b64e3-9155-4b6a-8148-de31b34b567e/S9vRu31Gqg.json"></iframe>
          </div>
          {/* Introduction */}
          <p>This is a simple web application designed to help you learn JavaScript concepts. Whether you're a beginner or an experienced developer looking to refresh your knowledge, this app provides interactive tutorials and exercises on various topics such as variables, loops, functions, objects, and arrays.</p>
          <p>Feel free to explore the different sections of the app using the navigation menu above. Each section contains informative content and hands-on examples to deepen your understanding of JavaScript.</p>
          <p>Happy learning!</p>
        </div>
      </div>

      {/* Cards for Navigation */}
      <div className="pt-3 mb-5 row justify-content-center">
        <div className="col-md-12">
          <div className="row justify-content-center">
            {/* Variables */}
            <div id="home-card" className="col-md-3 mb-4">
              <Link to="/variables" className="card shadow hover-card">
                <div className="card-body">
                  <img class="var-image" alt="" src="variable.png"></img>
                  <h5 className="card-title">Variables</h5>
                  <p className="card-text">Learn about variables in JavaScript.</p>
                </div>
              </Link>
            </div>
            {/* Loops */}
            <div id="home-card" className="col-md-3 mb-4">
              <Link to="/loops" className="card shadow hover-card">
                <div className="card-body">
                  <img class="var-image" alt="" src="feedback-loop.png"></img>
                  <h5 className="card-title">Loops</h5>
                  <p className="card-text">Explore different types of loops in JavaScript.</p>
                </div>
              </Link>
            </div>
            {/* Functions */}
            <div id="home-card" className="col-md-3 mb-4">
              <Link to="/functions" className="card shadow hover-card">
                <div className="card-body">
                  <img class="var-image" alt="" src="testing.png"></img>
                  <h5 className="card-title">Functions</h5>
                  <p className="card-text">Understand functions and their usage in JavaScript.</p>
                </div>
              </Link>
            </div>
            {/* Objects */}
            <div id="home-card" className="col-md-3 mb-4">
              <Link to="/objects" className="card shadow hover-card">
                <div className="card-body">
                  <img class="var-image" alt="" src="computer.png"></img>
                  <h5 className="card-title">Objects</h5>
                  <p className="card-text">Object-oriented programming in JavaScript.</p>
                </div>
              </Link>
            </div>
            {/* Arrays */}
            <div id="home-card" className="col-md-3 mb-4">
              <Link to="/arrays" className="card shadow hover-card">
                <div className="card-body">
                  <img class="var-image" alt="" src="binary.png"></img>
                  <h5 className="card-title">Arrays</h5>
                  <p className="card-text">Discover the power of arrays in JavaScript.</p>
                </div>
              </Link>
            </div>
            {/* Maps */}
            <div id="home-card" className="col-md-3 mb-4">
              <Link to="/maps" className="card shadow hover-card">
                <div className="card-body">
                  <img class="var-image" alt="" src="sitemap.png"></img>
                  <h5 className="card-title">Maps</h5>
                  <p className="card-text">Learn about maps and their usage in JavaScript for key-value pair data structures.</p>
                </div>
              </Link>
            </div>
            {/* Events */}
            <div id="home-card" className="col-md-3 mb-4">
              <Link to="/events" className="card shadow hover-card">
                <div className="card-body">
                  <img class="var-image" alt="" src="power.png"></img>
                  <h5 className="card-title">Events</h5>
                  <p className="card-text">Explore event handling in JavaScript and how to use events effectively.</p>
                </div>
              </Link>
            </div>
            {/* jQuery */}
            <div id="home-card" className="col-md-3 mb-4">
              <Link to="/jQueryClass" className="card shadow hover-card">
                <div className="card-body">
                  <img class="var-image" alt="" src="js-file.png"></img>
                  <h5 className="card-title">jQuery</h5>
                  <p className="card-text">Learn about jQuery and its features for DOM manipulation and event handling.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* JavaScript Key Points */}
      <h4 className="text-center">JavaScript is a versatile programming language commonly used for web development. It enables developers to create dynamic, interactive websites and web applications. Here are some key points about JavaScript</h4>
      <div className="container">
        <div className="row justify-content-center">
          {/* Client-Side Scripting */}
          <div className="pt-5 col-md-12">
            <p><strong>Client-Side Scripting:</strong></p>
            {/* Reference Link */}
            <p class="card shadow pt-2 pb-2 ps-2 pe-2"> JavaScript is primarily used for client-side scripting, meaning it runs in the user's web browser rather than on the web server. This allows for dynamic content and interaction without the need to reload the entire webpage. </p>
            {/* Reference */}
            (Reference: <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" target="_blank" rel="noreferrer">MDN Web Docs</a>)
          </div>
          {/* Syntax and Features */}
          <div className="pt-5 col-md-12">
            <p><strong>Syntax and Features:</strong></p>
            <p class="card shadow pt-2 pb-2 ps-2 pe-2">JavaScript syntax is similar to other programming languages like C++ and Java, making it relatively easy to learn for those familiar with programming concepts. It supports a variety of features such as variables, data types, operators, functions, loops, and conditional statements.</p>
            (Reference: <a href="https://www.w3schools.com/js/js_syntax.asp" target="_blank" rel="noreferrer">Javascript Syntax</a>)
          </div>
          {/* Event-Driven Programming */}
          <div className="pt-5 col-md-12">
            <p><strong>Event-Driven Programming:</strong></p>
            <p class="card shadow pt-2 pb-2 ps-2 pe-2">JavaScript is inherently event-driven, meaning it can respond to user actions like clicks, mouse movements, and keyboard inputs. This allows developers to create highly interactive user interfaces. </p>
            (Reference: <a href="https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript" target="_blank" rel="noreferrer">DigitalOcean</a>)
          </div>
          {/* DOM Manipulation */}
          <div className="pt-5 col-md-12">
            <p><strong>DOM Manipulation:</strong></p>
            <p class="card shadow pt-2 pb-2 ps-2 pe-2">One of the most powerful features of JavaScript is its ability to manipulate the Document Object Model (DOM) of a webpage. Developers can dynamically modify HTML elements, attributes, and styles, enabling the creation of rich, interactive web experiences. </p>
            (Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" target="_blank" rel="noreferrer">MDN Web Docs</a>)
          </div>
          {/* Asynchronous Programming */}
          <div className="pt-5 col-md-12">
            <p><strong>Asynchronous Programming:</strong></p>
            <p class="card shadow pt-2 pb-2 ps-2 pe-2">JavaScript supports asynchronous programming through mechanisms like callbacks, promises, and async/await. This allows for non-blocking code execution, which is essential for tasks like fetching data from servers and handling user input without freezing the UI. </p>
            (Reference: <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" target="_blank" rel="noreferrer">MDN Web Docs</a>)
          </div>
        </div>
      </div>

      {/* React Key Points */}
      <h4 className="text-center mt-5">React, on the other hand, is a popular JavaScript library for building user interfaces. Developed by Facebook, React focuses on the component-based approach to UI development. Here's an overview of React</h4>
      <div className="container">
        <div className="row justify-content-center">
          {/* Component-Based Architecture */}
          <div className="pt-5 col-md-12">
            <p><strong>Component-Based Architecture:</strong></p>
            <p class="card shadow pt-2 pb-2 ps-2 pe-2"> React applications are built using reusable UI components. Each component encapsulates its own logic, structure, and styling, making it easier to maintain and scale complex interfaces. </p>
            (Reference: <a href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noreferrer">React Documentation</a>)
          </div>
          {/* Virtual DOM */}
          <div className="pt-5 col-md-12">
            <p><strong>Virtual DOM:</strong></p>
            <p class="card shadow pt-2 pb-2 ps-2 pe-2"> React utilizes a virtual representation of the DOM, which is a lightweight copy of the actual DOM. When changes are made to the UI, React compares the virtual DOM with the real DOM and only updates the necessary parts, resulting in better performance. </p>
            (Reference: <a href="https://reactjs.org/docs/faq-internals.html" target="_blank" rel="noreferrer">React Documentation</a>)
          </div>
          {/* JSX Syntax */}
          <div className="pt-5 col-md-12">
            <p><strong>JSX Syntax:</strong></p>
            <p class="card shadow pt-2 pb-2 ps-2 pe-2">React introduces JSX (JavaScript XML), an extension to JavaScript that allows developers to write HTML-like code within JavaScript. This syntax makes it easier to define UI components and their structure directly within the code. </p>
            (Reference: <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noreferrer">React Documentation</a>)
          </div>
          {/* Declarative Programming */}
          <div className="pt-5 col-md-12">
            <p><strong>Declarative Programming:</strong></p>
            <p class="card shadow pt-2 pb-2 ps-2 pe-2">React promotes a declarative programming paradigm, where developers describe what they want the UI to look like rather than how to achieve it. This leads to more concise and readable code. </p>
            (Reference: <a href="https://reactjs.org/docs/react-component.html" target="_blank" rel="noreferrer">React Documentation</a>)
          </div>
          {/* Unidirectional Data Flow */}
          <div className="pt-5 col-md-12">
            <p><strong>Unidirectional Data Flow:</strong></p>
            <p class="card shadow pt-2 pb-2 ps-2 pe-2">React follows a unidirectional data flow, meaning data flows in a single direction from parent to child components. This makes it easier to understand how data changes propagate through the application, improving predictability and debuggability. </p>
            (Reference: <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" rel="noreferrer">React Documentation</a>)
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
