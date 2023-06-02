import React, { useEffect, useState } from 'react';
import Question from './subcomponents/question';

const Quiz = () => {
  const [randomQuiz, setRandomQuiz] = useState([]);

  const apiKey = "w9Rvsy8CdKGevTtBTBwe0aGMiqhMO7sHiJx57y8Y";
  useEffect(() => {
    async function fetchRandomQuiz() {
    
      const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10`)
      const data = await response.json()
      setRandomQuiz(data)
    }
    fetchRandomQuiz()

  }, [])

  const handleClose = (e) => {
    location.href = "/quiz"
  }

  const getCorrectAnswer = choices => {
    const keys = Object.keys(choices)
    const correctAnswer = keys.find(key => choices[key] === "true")
    return correctAnswer;

  }

  return (
    <>
    <div className='quiz-container'>
    <div className='quiz-title'>
      <h2>Quiz</h2>
      <button className='close-button' onClick={handleClose}> X </button>
    </div>
    <div className='quiz'>
      {randomQuiz.map((quiz, index) => (
            <Question  
            answers={quiz.answers} 
            correctAnswer={getCorrectAnswer(quiz.correct_answers)}
            key={quiz.id}
            questionNumber={index +1} 
            question={quiz.question}
            />
      ))} 
    </div>
    </div>
    </>
  )
};

export default Quiz;
