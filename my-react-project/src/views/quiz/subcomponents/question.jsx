import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cacheIncorrectAnswers } from "../../../features/incorrectAnswerSlice";

const Question = ({ id, correctAnswer, questionNumber, question, answers, setScore, score, incorrectAnswers, setIncorrectAnswers}) => {
    const [_correctAnswer, setCorrectAnswers] = useState();
    const [isActive, setIsActive] = useState(false)
    const [numberOfAnswers, setNumberOfAnswers] = useState()

    const dispatch = useDispatch();

    useEffect(() => {
      const re = /_(\D)_/gi;
      const letter = correctAnswer.split(re)
      setCorrectAnswers(letter[1])
      const keys = answers && (Object.keys(answers))
      const values = answers && keys.filter(x => answers[x])
      
      values.length && setNumberOfAnswers(values.length)
    }, [answers])

    const {answer_a, answer_b, answer_c, answer_d } = answers;

    const handleClick = (clickedOption) => {
      
        if (clickedOption) {
          setIsActive(clickedOption)
        }
        if(clickedOption === _correctAnswer) {
            setScore(score + 1)
        } else {
          
          dispatch(cacheIncorrectAnswers(id))
          }
    }
  
    return (
        <>
          <div className='quiz-question'>{questionNumber}. {question}</div>
          <div className='quiz-answers' > 
            <div onClick={() => handleClick('a')} className={isActive === 'a' ? "clicked" : ' '}> {answer_a} </div>
            <div onClick={() => handleClick('b')} className={isActive === 'b' ? "clicked" : ' '}> {answer_b} </div>
            {numberOfAnswers > 2 && <div onClick={() => handleClick('c')} className={isActive === 'c' ? "clicked" : ' '}> {answer_c} </div>}
            {numberOfAnswers > 3 && <div onClick={() => handleClick('d')} className={isActive === 'd' ? "clicked" : ' '}> {answer_d} </div>}
          </div>
        </>  
    );
}

export default Question;