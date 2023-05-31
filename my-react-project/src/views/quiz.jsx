import React, { useEffect, useState } from 'react';
import Modal from "../component/modal";


const Quiz = () => {
  const [quizArray, setQuizArray] = useState([]);
  const [quizOptions, setQuiz] = useState([]);
  const [correctAnswer, setCorrectAnswers] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [quizSelected, setQuizSelected] = useState(false);

  const apiKey = "w9Rvsy8CdKGevTtBTBwe0aGMiqhMO7sHiJx57y8Y";
  const tags = ['html', 'JavaScript', 'MySQL']

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

  console.log(quizArray)

  function handleAnswer() {
    console.log("hello")
  }

  const handleClose = (e) => {
    location.href = "/quiz"
  }

  const handleClick = (e) => {
    const category = e.target.getAttribute('data-attribute')
    if(category === "HTML") {
      setQuiz(quizArray[0])
    } if (category === "JavaScript") {
      setQuiz(quizArray[1])
    } if (category === "SQL") {
      setQuiz(quizArray[2])
    }
    setIsModal(!isModal)
    setQuizSelected(true)
  }

  const theCorrectAnswer = quizOptions.map(quiz => {
    console.log(Object.keys(quiz.correct_answers))
  })

  return (
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
    </div>

    {quizSelected 
    ?
    <>
    <div className='quiz-title'>
    <h2>Quiz</h2>
    <button className='close-button' onClick={handleClose}> X </button>
    </div>
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
    </>
    :
    ""}
  </div>
  )
};

export default Quiz;



// terinary statement
// let result = condition ? resultIfTrue : resultIfFalse
