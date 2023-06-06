import React, { useEffect, useState } from 'react';
import Modal from "../component/modal";
import Question from './quiz/subcomponents/question';


const Category = () => {
  const [quizArray, setQuizArray] = useState([]);
  const [score, setScore] = useState(0)
  const [quizOptions, setQuiz] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [quizSelected, setQuizSelected] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const apiKey = "w9Rvsy8CdKGevTtBTBwe0aGMiqhMO7sHiJx57y8Y";
  const tags = ['html', 'JavaScript', 'MySQL', 'Wordpress', 'PHP', 'Docker', 'DevOps', 'BASH']

  useEffect(() => {
    let quizPromises = tags.map(tag => {
      let category = tag === "MySQL" ? "sql" : "code&difficulty=Easy"
      let url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&${category}&limit=10&tags=${tag}`
      
     async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      return data
      }
      return fetchData()
    })

    async function getData() {
    let quizResponse = await Promise.all(quizPromises)
    setQuizArray(quizResponse)
  }
    getData()
  }, [])

  const handleFinalAnswers = () => {
      setShowScore(true)
  } 

  const handleClose = (e) => {
    location.href = "/category"
  }

  const handleClick = (e) => {
    const category = e.target.getAttribute('data-attribute')
    if(category === "HTML") {
      setQuiz(quizArray[0])
    } if (category === "JavaScript") {
      setQuiz(quizArray[1])
    } if (category === "SQL") {
      setQuiz(quizArray[2])
    } if (category === "wordpress") {
      setQuiz(quizArray[3])
    } if (category === "PHP") {
      setQuiz(quizArray[4])
    } if (category === "Docker") {
      setQuiz(quizArray[5])
    } if (category === "DevOps") {
      setQuiz(quizArray[6])
    } if (category === "BASH") {
      setQuiz(quizArray[7])
    }
    setIsModal(!isModal)
    setQuizSelected(true)
  }

  const getCorrectAnswer = choices => {
    const keys = Object.keys(choices)
    const correctAnswer = keys.find(key => choices[key] === "true")
    return correctAnswer;
  }

  const handleLanding = () => {
    location.href = '/'
  }
  
  const handleRefresh = () => {
    location.href = '/category'
  }

  const handleQuiz = () => {
    location.href = '/quiz'
  }

  return (
    <>
    {showScore 
    ? 
      <div className='score-overlay'>
        <div className='showScore-card'>
          <div onClick={handleLanding}className='showScore-close-btn'> <p> x </p> </div>
          <p> You scored {score} out of 10! </p>
          <div className='showScore-buttons'>
          <button onClick={handleRefresh} className='landing-button'>Pick a Category!</button>
          <button onClick={handleQuiz} className='landing-button'>Take another Random Quiz</button>
          </div>
        </div>
      </div>
    : 
    <div className='quiz-container'>
      <div className='quiz-modals'>
       {!isModal && <button className='modal-button' data-attribute="HTML" onClick={handleClick}> HTML Quiz </button>}
        {!isModal && (
         <Modal 
        action={handleClick}
      />)}
       {!isModal && <button className='modal-button' data-attribute="JavaScript" onClick={handleClick}> JavaScript Quiz </button>}
       {!isModal && (
      <Modal 
        action={handleClick}
      />)}
        {!isModal && <button className='modal-button' data-attribute="SQL" onClick={handleClick}> MySQL Quiz </button>}
       {!isModal && (
      <Modal 
        action={handleClick}
      />)}
        {!isModal && <button className='modal-button' data-attribute="wordpress" onClick={handleClick}> WordPress Quiz </button>}
        {!isModal && (
          <Modal 
        action={handleClick}
      />)}
        {!isModal && <button className='modal-button' data-attribute="PHP" onClick={handleClick}> PHP Quiz </button>}
        {!isModal && (
          <Modal 
        action={handleClick}
      />)}
        {!isModal && <button className='modal-button' data-attribute="Docker" onClick={handleClick}> Docker Quiz </button>}
        {!isModal && (
          <Modal 
        action={handleClick}
      />)}
         {!isModal && <button className='modal-button' data-attribute="DevOps" onClick={handleClick}> DevOps Quiz </button>}
        {!isModal && (
          <Modal 
        action={handleClick}
      />)}
         {!isModal && <button className='modal-button' data-attribute="BASH" onClick={handleClick}> Bash Quiz </button>}
        {!isModal && (
          <Modal 
        action={handleClick}
      />)}
    </div>

      {quizSelected 
      ?
      <>
      <div className='quiz-title'>
      <h2>Quiz</h2>
      <button className='close-button' onClick={handleClose}> X </button>
      </div>
      <div className='quiz'>
        {quizOptions.map((quiz, index) => (
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
      </>
      :
      ""}
  </div>
  }
</>
  )};



export default Category;