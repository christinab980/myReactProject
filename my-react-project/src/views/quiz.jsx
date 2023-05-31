import React, { useEffect, useState } from 'react';

const Quiz = () => {
  const [quizOptions, setQuiz] = useState([]);
  const [correctAnswer, setCorrectAnswers] = useState([]);

  const apiKey = "w9Rvsy8CdKGevTtBTBwe0aGMiqhMO7sHiJx57y8Y";
  const tags = ['html', 'JavaScript', 'MySQL']

  useEffect(() => {
    fetch( `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=code&difficulty=Easy&limit=10&tags=HTML`)
    .then(response => response.json())
    .then(data => setQuiz(data))

  }, [])

  console.log(quizOptions)

  function handleAnswer() {
    console.log("hello")
  }

  const theCorrectAnswer = quizOptions.map(quiz => {
    console.log(Object.keys(quiz.correct_answers))
  })

  return (
    <div className='quiz-container'>
    <h2>Quiz</h2>
    <div className='html-quiz'>
    {quizOptions.map((quiz, index) => (
        <div key={quiz.id}>
          <div className='quiz-question'>{index + 1}. {quiz.question}</div>
          <div className='quiz-answers' onClick={handleAnswer}> 
            <div className='quiz-answer'>{quiz.answers.answer_a}</div>
            <div className='quiz-answer'>{quiz.answers.answer_b}</div>
            <div className='quiz-answer'>{quiz.answers.answer_c}</div>
            <div className='quiz-answer'>{quiz.answers.answer_d}</div>
          </div>
        </div>
      ))} 
    </div>
  </div>
  )
};

export default Quiz;
