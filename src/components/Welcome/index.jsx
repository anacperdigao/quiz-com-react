import React from "react";
import Quiz from '../../images/quiz.svg'
import * as S from './styles'


const Welcome = () => {
  return (
    <S.WelcomeDiv>
        <S.Subtitle>Seja bem-vindo!</S.Subtitle>
        <S.Paragraph>Clique no botão abaixo para começar</S.Paragraph>
        <button>Iniciar</button>
        <S.Image src={Quiz} alt="Início do quiz"/>
    </S.WelcomeDiv>
  
  )
}

export default Welcome