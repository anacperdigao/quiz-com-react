import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import WellDone from '../../images/welldone.svg'
import * as S from './styles'



const GameOver = () => {
  
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <S.GameOverDiv>
            <S.Subtitle>Fim de Jogo!</S.Subtitle>
            <S.Paragraph>Pontuação: {quizState.score}</S.Paragraph>
            <S.Paragraph>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</S.Paragraph>
            <S.Image src={WellDone} alt="Fim do quiz" />
            <button onClick={() => dispatch({type: 'NEW_GAME'})}>Reiniciar</button>
        </S.GameOverDiv>
  )
}

export default GameOver