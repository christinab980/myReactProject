import React from 'react';

const Landing = () => {
  return (
    <div className='landing-container'>
      <img className='landing-quiz-logo'src="./src/img/quizLogo.png" alt="quiz-logo" />
      <div className='landing-wrap'> 
        <h1>Welcome to QuizLite!</h1>
        <p> Test your knowledge on the latest programming languages including HTML, JavaScript, MySQL as well as quizes on Wordpress platform, PHP, Docker, etc. </p>
      </div>
    </div>
  )
};

export default Landing;
