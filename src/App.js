/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import GameOver from "./components/GameOver";
import { GlobalStyle } from "./components/GlobalStyle";
import Question from "./components/Question";
import Welcome from "./components/Welcome";
import { QuizContext } from "./context/quiz";


function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  // Vou embaralhar as perguntas pra nao começar igual e vai ser executado apenas uma vez 
  // quando a aplicação começa, por isso só recebe um colchetes vazios como segundo componente.
  // Só que eu vou fazer lá no reducer e aqui só vou acessar.
  useEffect(() => {
    dispatch({type: 'REORDER_QUESTIONS'});
  }, [])


  return (
    <div className="App">
      
      <GlobalStyle />
      
      <h1>Quiz</h1>
      
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}

    </div>
  );
}

export default App;
