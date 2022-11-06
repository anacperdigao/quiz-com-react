import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import * as S from './styles'



const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

  return (

    <S.QuestionsDiv>
        <S.Paragraph>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</S.Paragraph>
        <S.Subtitle>{currentQuestion.question}</S.Subtitle>
        <div>
            <S.Paragraph>Opções</S.Paragraph>
        </div>
        <S.ButtonQuestions>Continuar</S.ButtonQuestions>
    </S.QuestionsDiv>
  
  )
}

export default Question