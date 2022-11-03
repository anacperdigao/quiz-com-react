import {createGlobalStyle} from 'styled-components';



export const GlobalStyle = createGlobalStyle`
* {  
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  color: white;
}

body,
html {
  min-height: 100vh;
  height: 100%;
  background-color: #1c1c1c;
}

img {
  max-width: 100%;
}


button {
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  padding: .8rem 1.5rem;
  background: linear-gradient(90deg, rgba(132,53,222,1) 0%, rgba(184, 184, 232, 1) 100%);
  border-radius: 3rem;
  border: none;

  :hover{
    background: linear-gradient(90deg, rgba(184, 184, 232, 1) 0%, rgba(132,53,222,1) 100%);   
  }
}

.App{
  text-align: center;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.App h1{
  margin-bottom: 2rem;
}

`;