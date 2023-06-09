import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectQuizData } from '../features/quizSlice';
import { cacheIncorrectAnswers } from '../features/incorrectAnswerSlice';
import Question from "../views/quiz/subcomponents/question"

const Wrong = () => {
    const [_correctAnswer, setCorrectAnswers] = useState();
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const quizData = useSelector(selectQuizData)
    const incorrect = useSelector(cacheIncorrectAnswers)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [reviewQuiz, setReviewQuiz] = useState();

    useEffect(() => {

        let questionsToReview = [];
        quizData.forEach(x => {
            if(incorrect.payload.incorrects.indexOf(x.id) > -1) {
                questionsToReview.push(x)
            }
        })
        setReviewQuiz(questionsToReview)
    }, [])
    

    const getCorrectAnswer = choices => {
        const keys = Object.keys(choices)
        const correctAnswer = keys.find(key => choices[key] === "true")
        return correctAnswer;
      }

    const handleClick = () => {
        navigate('/category')
    }

    const handleQuiz = () => {
        navigate('/')
    }

    const handleFinalAnswers = () => {
        setShowScore(true)
    } 


  const handleRefresh = () => {
    navigate('/')
  }

    return (
    <>
        {showScore ? (
              <div className='score-overlay'>
              <div className='showScore-card'>
                <div onClick={handleRefresh}className='showScore-close-btn'> <p> x </p> </div>
                <p> You scored {score}! </p>
                <div className='showScore-buttons'>
                <button onClick={handleClick} className='landing-button'>Pick a Category!</button>
                <button onClick={handleQuiz} className='landing-button'> Random Quiz</button>
                </div>
                <button onClick={handleRefresh} className='showScore-button'> Home </button>
              </div>
            </div>
        ) : ( 
          <div>    
        <h3> Questions </h3>
            {reviewQuiz && reviewQuiz.map((quiz, index) => (
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
        <button className="submit-answers-button" onClick={handleFinalAnswers}>Submit Answers</button>

        <div className='showScore-buttons'>
            <button onClick={handleClick} className='landing-button'>Pick a Category!</button>
            <button onClick={handleQuiz} className='landing-button'>Take another Random Quiz</button>
        </div>
        </div> 
        )}
    </>
    )
    };

export default Wrong;
