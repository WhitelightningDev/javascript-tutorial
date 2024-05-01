import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
      setErrorMessage('An error occurred while fetching questions.');
      return;
    }

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question or show result
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Card>
      <Card.Body>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        {showResult ? (
          <div>
            <h2>Quiz Completed!</h2>
            <p>Your score: {score}/{questions.length}</p>
            {/* Add a button to restart the quiz if needed */}
            <Button onClick={() => { setCurrentQuestionIndex(0); setScore(0); setShowResult(false); setErrorMessage(''); }}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            {questions[currentQuestionIndex] ? (
              <>
                <h2>Question {currentQuestionIndex + 1}:</h2>
                <h3>{questions[currentQuestionIndex].question}</h3>
                {/* Render options with letters (A, B, C, D, etc.) */}
                <ul>
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <li key={index} onClick={() => handleAnswerClick(option)}>
                      {String.fromCharCode(65 + index)}. {option}
                    </li>
                  ))}
                </ul>
                <p>Score: {score}</p>
              </>
            ) : (
              <p>No questions available.</p>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Quiz;
