import { useEffect, useState } from "react";

const Question = ({ correctAnswer, questionNumber, question, answers }) => {
    const [_correctAnswer, setCorrectAnswers] = useState();
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
       const re = /_(\D)_/gi;
       const letter = correctAnswer.split(re)
       setCorrectAnswers(letter[1])
    }, [])

    const {answer_a, answer_b, answer_c, answer_d } = answers;

    const handleClick = (e, clickedOption) => {
        setIsActive(!isActive)
        if(clickedOption === _correctAnswer) {
            alert("correct")
        } else alert("incorrect")
    }
  
    return (
        <>
          <div className='quiz-question'>{questionNumber}. {question}</div>
          <div className='quiz-answers' > 
            <div onClick={() => handleClick('a')} className={isActive ? "clicked" : ' '}> {answer_a} </div>
            <div onClick={() => handleClick('b')} className={isActive ? "clicked" : ' '}> {answer_b} </div>
            <div onClick={() => handleClick('c')} className={isActive ? "clicked" : ' '}> {answer_c} </div>
            <div onClick={() => handleClick('d')} className={isActive ? "clicked" : ' '}> {answer_d} </div>
          </div>
        </>  
    );
}

export default Question;