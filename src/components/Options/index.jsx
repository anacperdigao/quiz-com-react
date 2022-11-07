import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import * as S from './styles'

const Options = ({option, answer, selectOption}) => {

    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <S.OptionsDiv className={`
        ${quizState.answerSelected && option === answer ? 'correct' : ''}
        ${quizState.answerSelected && option !== answer ? 'wrong' : ''}
    `} 
        onClick={() => selectOption(option)}
    >
        <p>{option}</p>
    </S.OptionsDiv>
  )
}

export default Options