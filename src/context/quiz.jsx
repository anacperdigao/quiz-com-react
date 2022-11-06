import { createContext, useReducer } from "react";
import questions from '../data/questions'

// Determinando os estágios do jogo
const STAGES = ['Start', 'Playing', 'End'];

// Determinando qual o estado inicial quando o usuário entra na aplicação
const initialState = {
    gameStage: STAGES[0],
    questions: questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

// O reducer utiliza dois parâmetros, primeiro o estado inicial, e depois a ação que o usuario
// vai fazer para modificar essa estado.
// Usei o spread operator pq eu quero manter as propriedades do objeto initialState, porem depois eu mudei
// o gameStage para o indice [1]. Com isso eu nao perco as questions.
const quizReducer = (state, action) => {

    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1],
            };
        

        case 'REORDER_QUESTIONS':
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5
            })
            return {
                ...state,
                questions: reorderedQuestions,
            };


        case 'CHANGE_QUESTION':
            const nextQuestion = state.currentQuestion + 1
            let endGame = false

            // Se a questions no indice [nextQuestions] não existir...
            if(!questions[nextQuestion]){
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                // Se meu endGame for true, eu pulo pro STAGE 'End', senão, eu permaneço no state atual
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            };

        
        case 'NEW_GAME':
            return initialState;


        case 'CHECK_ANSWER':
            // Aqui eu só validei para nao deixar selecionar e pontuar varias vezes
            if (state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if( answer === option ) {
                correctAnswer = 1;
            }

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }


        default:
            return state;
    }
}

//--------------------------------------- Criação do contexto ---------------------------------------//

export const QuizContext = createContext();
QuizContext.displayName = 'quiz'


export const QuizProvider = ({children}) => {

    // No meu provider, vou passar o reducer através do value para poder prover onde eu quiser usar.
    const value = useReducer(quizReducer, initialState);

    return(
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}