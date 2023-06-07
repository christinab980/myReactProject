import React from 'react';
// import navs from '../mocks/navs.json'
import { useNavigate } from 'react-redux'

const Landing = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/category")
  }

  const handleQuiz = () => {
    navigate("/quiz")
  }
 
  return (
    <div className='landing-container'>
      <img className='landing-quiz-logo' src="/quizLogo.png" alt="quiz-logo" />
      <div className='landing-wrap'> 
        <h1>Welcome to QuizLite!</h1>
        <p> Test your knowledge on the latest programming languages including HTML, JavaScript, MySQL as well as quizes on Wordpress, PHP, Docker, and more! </p>
        <div className='landing-options'>
        <button onClick={handleClick} className='landing-button'> Pick a Category!</button>
        <button onClick={handleQuiz} className='landing-button'>Let's go with a random quiz! </button>
        </div>
      </div>
    </div>
  )
};

export default Landing;
