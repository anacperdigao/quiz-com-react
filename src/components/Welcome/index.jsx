import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Quiz from '../../images/quiz.svg'
import * as S from './styles'


const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <S.WelcomeDiv>
        <S.Subtitle>Seja bem-vindo!</S.Subtitle>
        <S.Paragraph>Clique no botão abaixo para começar</S.Paragraph>
        <button onClick={() => dispatch({ type: 'CHANGE_STATE'})}>Iniciar</button>
        <S.Image src={Quiz} alt="Início do quiz"/>
    </S.WelcomeDiv>
  
  )
}

export default Welcome