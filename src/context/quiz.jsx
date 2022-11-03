import { createContext, useReducer } from "react";
import questions from '../data/questions'


const STAGES = ['Start', 'Playing', 'End'];

const initialStage = {
    gameStage: STAGES[0],
    questions: questions
}

const quizReducer = (state, action) => {

    switch (action.type) {
        case 'CHANGE_STATE':
            return state;

        default:
            return state;
    }
}

export const QuizContext = createContext();
QuizContext.displayName = 'quiz'


export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer, initialStage);
    
    return(
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}