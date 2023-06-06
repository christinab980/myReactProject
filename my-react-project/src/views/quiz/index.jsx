import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from './subcomponents/question';
import { selectQuizData } from '../../features/quizSlice';

const Quiz = () => {
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
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
      setShowScore(true)
  } 

  const handleClick = () => {
    location.href = "/category"
  }

  const handleRefresh = () => {
    location.href = "/"
  }

  const handleQuiz = () => {
    location.href = "/quiz"
  }

  return (
    <>
    {showScore ? (
      <div className='score-overlay'>
        <div className='showScore-card'>
          <div onClick={handleRefresh}className='showScore-close-btn'> <p> x </p> </div>
          <p> You scored {score} out of 10! </p>
          <div className='showScore-buttons'>
          <button onClick={handleClick} className='landing-button'>Pick a Category!</button>
          <button onClick={handleQuiz} className='landing-button'>Take another Random Quiz</button>
          </div>
        </div>
      </div>

    ) : (
   
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
            setScore={setScore}
            score={score}
            />
      ))} 
    </div>
    <button className="submit-answers-button" onClick={handleFinalAnswers}>Submit Answers</button>
    </div>
       )}
    </>
  )
};

export default Quiz;
