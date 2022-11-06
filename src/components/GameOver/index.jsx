import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import WellDone from '../../images/welldone.svg'
import * as S from './styles'



const GameOver = () => {
  
    return (
        <S.GameOverDiv>
            <S.Subtitle>Fim de Jogo!</S.Subtitle>
            <S.Paragraph>Pontuação: x</S.Paragraph>
            <S.Paragraph>Você acertou y de z perguntas.</S.Paragraph>
            <S.Image src={WellDone} alt="Fim do quiz" />
            <button>Reiniciar</button>
        </S.GameOverDiv>
  )
}

export default GameOver