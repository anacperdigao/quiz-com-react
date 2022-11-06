import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import * as S from './styles'

const Options = ({option}) => {

    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div>
        <S.Paragraph>{option}</S.Paragraph>
    </div>
  )
}

export default Options