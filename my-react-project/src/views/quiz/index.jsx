import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from './subcomponents/question';
import { selectQuizData } from '../../features/quizSlice';

const Quiz = () => {
  const [score, setScore] = useState(0)
  const data = useSelector(selectQuizData)

  useEffect(() => {
    console.log(data)
  },[data])

  const dispatch = useDispatch()

  const handleClose = (e) => {
    location.href = "/quiz"
  }

  const getCorrectAnswer = choices => {
    const keys = Object.keys(choices)
    const correctAnswer = keys.find(key => choices[key] === "true")
    return correctAnswer;
  }

  const handleFinalAnswers = () => {
    console.log('hello')
  } 

  return (
    <>
    <div className='quiz-container'>
    <div className='quiz-title'>
      <h2>Quiz</h2>
      <button className='close-button' onClick={handleClose}> X </button>
    </div>
    <div className='quiz'>
      {data && data.map((quiz, index) => (
            <Question  
            answers={quiz.answers} 
            correctAnswer={getCorrectAnswer(quiz.correct_answers)}
            key={quiz.id}
            questionNumber={index +1} 
            question={quiz.question}
            />
      ))} 
    </div>
    <button onClick={handleFinalAnswers}>Submit Answers</button>
    </div>
    </>
  )
};

export default Quiz;
