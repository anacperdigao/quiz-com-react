import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import Options from '../Options'
import * as S from './styles'



const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    // Vou usar o payload para adicionar uma informação que eu queira passar pro reduce
    const onSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: { answer: currentQuestion.answer, option }
        })
    }

  return (

    <S.QuestionsDiv>
        <S.Paragraph>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</S.Paragraph>
        <S.Subtitle>{currentQuestion.question}</S.Subtitle>
        <div>
            {currentQuestion.options.map(option => 
                <Options 
                    option = {option} 
                    key = {option}
                    answer = {currentQuestion.answer}
                    selectOption = {() => onSelectOption(option)}
                />
            )}
        </div>
        
        { quizState.answerSelected
        &&
        <S.ButtonQuestions onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>Continuar</S.ButtonQuestions>
        }

    </S.QuestionsDiv>
  
  )
}

export default Question