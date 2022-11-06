import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Quiz from '../../images/quiz.svg'
import * as S from './styles'


const Welcome = () => {

  // O dispatch serve para eu poder entrar no reducer e executar o switch case que eu fiz lá.
  // quizState eu pego os valores, e dispatch eu altero os valores.
  const [ dispatch ] = useContext(QuizContext)


  // No onClick eu vou acessar o reducer através do dispatch e vou dizer qual o case que eu quero acessar no
  // meu switch case, e nesse caso, vai ser o 'CHANGE_STATE'
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