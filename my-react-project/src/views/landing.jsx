import React from 'react';

const Landing = () => {

  const handleClick = () => {
    location.href = "/category"
  }
  return (
    <div className='landing-container'>
      <img className='landing-quiz-logo'src="./src/img/quizLogo.png" alt="quiz-logo" />
      <div className='landing-wrap'> 
        <h1>Welcome to QuizLite!</h1>
        <p> Test your knowledge on the latest programming languages including HTML, JavaScript, MySQL as well as quizes on Wordpress platform, PHP, Docker, etc. </p>
        <div className='landing-options'>
        <button onClick={handleClick} className='landing-button'> Pick a Category!</button>
        <button className='landing-button'>Let's go with a random quiz! </button>
        </div>
      </div>
    </div>
  )
};

export default Landing;
