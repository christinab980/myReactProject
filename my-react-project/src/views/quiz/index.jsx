import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Question from './subcomponents/question';
import { selectQuizData } from '../../features/quizSlice';
import { useNavigate } from 'react-router-dom'


const Quiz = () => {
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const data = useSelector(selectQuizData)

  const navigate = useNavigate()

  useEffect(() => {
    console.log(data)
  },[data])

  const handleClose = () => {
    navigate('/')
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
    navigate('/category')
  }

  const handleRefresh = () => {
    navigate('/')
  }

  const handleQuiz = () => {
    setShowScore(false)
  }

  const handleWrongAnswers = () => {
    navigate("/wrong")
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
          <button onClick={handleWrongAnswers} className='showScore-button'> Review </button>
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
            id={quiz.id}
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
