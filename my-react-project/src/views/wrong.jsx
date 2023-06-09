import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectQuizData } from '../features/quizSlice';
import { cacheIncorrectAnswers } from '../features/incorrectAnswerSlice';
import Question from './quiz/subcomponents/question';

const Wrong = () => {

    const quizData = useSelector(selectQuizData)
    const incorrects = useSelector(cacheIncorrectAnswers)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [reviewQuiz, setReviewQuiz] = useState();
    
    useEffect(() => {
        let questionsToReview = [];
        quizData.forEach(x => {
            if(incorrects.indexOf(x.id) > -1) {
                questionsToReview.push(x)
            }
        })
        setReviewQuiz(questionsToReview)
    }, [])

    const handleClick = () => {
        navigate('/category')
    }

    const handleQuiz = () => {
        navigate('/')
    }

    return (
        <div className='score-overlay'>
            <div className='wrong-card'>
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
                 setIncorrectAnswers={setIncorrectAnswers}
                 incorrectAnswers={incorrectAnswers}
                 id={quiz.id}
                 />
           ))} 
            <div className='showScore-buttons'>
            <button onClick={handleClick} className='landing-button'>Pick a Category!</button>
            <button onClick={handleQuiz} className='landing-button'>Take another Random Quiz</button>
            </div>
            </div>
        </div>
    )
    };

export default Wrong;
