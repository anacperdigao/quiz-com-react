import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div className="App">
      
      <GlobalStyle />
      <h1>Quiz</h1>
      <Welcome />

    </div>
  );
}

export default App;
