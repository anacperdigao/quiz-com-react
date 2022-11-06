import { createContext, useReducer } from "react";
import questions from '../data/questions'

// Determinando os estágios do jogo
const STAGES = ['Start', 'Playing', 'End'];

// Determinando qual o estado inicial quando o usuário entra na aplicação
const initialStage = {
    gameStage: STAGES[0],
    questions: questions,
}

// O reducer utiliza dois parâmetros, primeiro o estado inicial, e depois a ação que o usuario
// vai fazer para modificar essa estado.
const quizReducer = (state, action) => {

    switch (action.type) {
        case 'CHANGE_STATE':
            return state;

        default:
            return state;
    }
}

//--------------------------------------- Criação do contexto ---------------------------------------//

export const QuizContext = createContext();
QuizContext.displayName = 'quiz'


export const QuizProvider = ({children}) => {

    // No meu provider, vou passar o reducer através do value para poder prover onde eu quiser usar.
    const value = useReducer(quizReducer, initialStage);

    return(
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}