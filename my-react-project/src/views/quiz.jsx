import React, { useEffect, useState } from 'react';

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

  return (
    <>
    <div className='quiz-container'>
    <div className='quiz-title'>
      <h2>Quiz</h2>
      <button className='close-button' onClick={handleClose}> X </button>
    </div>
    <div className='quiz'>
      {randomQuiz.map((quiz, index) => (
        <div key={quiz.id}>
          <div className='quiz-question'>{index + 1}. {quiz.question}</div>
          <div className='quiz-answers' > 
            <div className='quiz-answer'>{quiz.answers.answer_a}</div>
            <div className='quiz-answer'>{quiz.answers.answer_b}</div>
            <div className='quiz-answer'>{quiz.answers.answer_c}</div>
            <div className='quiz-answer'>{quiz.answers.answer_d}</div>
          </div>
        </div>
      ))} 
    </div>
    </div>
    </>
  )
};

export default Quiz;
