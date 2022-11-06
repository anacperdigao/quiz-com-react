import styled from 'styled-components'


export const OptionsDiv = styled.div`
    background-color: #3c0e70;
    border-radius: .5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor:pointer;
    opacity: 0.8;
    transition: .4s;

    :hover{
        opacity: 1;
    }

&.correct {
    background-color: #0bfc03;
    font-weight: bold;
}    

&.wrong {
    background-color: #3c0e70;
    opacity: 0.4;
}

`
