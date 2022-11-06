import React, { useContext, useEffect } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import Question from "./components/Question";
import Welcome from "./components/Welcome";
import { QuizContext } from "./context/quiz";


function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  // Vou embaralhar as perguntas pra nao começar igual e vai ser executado apenas uma vez 
  // quando a aplicação começa, por isso só recebe um colchetes vazios como segundo componente.

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      
      <GlobalStyle />
      <h1>Quiz</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}

    </div>
  );
}

export default App;
