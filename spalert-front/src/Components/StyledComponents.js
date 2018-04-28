import styled from 'styled-components';
import React from 'react';

const StyledCenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4vh;
    flex-direction: column;
`

const StyledTextInput = styled.input`
    padding: 10px;
    border-radius: 10px;
    width: 36vh;
    font-size: 20px;
    height: 15px;
    border: solid;
    margin: 10px;
    border-width: 1px;
    border-color: gray;
`

const StyledSelect = styled.select`
    height: 36px;
    border-radius: 10px;
    font-size: 20px;
    background-color: white;
    margin: 10px;
    width: 40vh;
    border-color: gray;
    padding-left: 8px;
    color: ${ props => props.disabledOption ? "gray" : "black" }
`

const StyledButton = styled.button`
    padding: 10px;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const StyledSubtitle = styled.p`
    align-self: flex-start;
    margin-left: 30vw;
    color: #3F3333;
`

const AlertButton = styled.button`
    padding: 5px;
    font-size: 15px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100px;
    color: black;
    background-color: white;
`

function createOptions(options){
    return Object.keys(options).map((key) => <option value={key} key={key}>{options[key]}</option>);
}

export { StyledButton, StyledCenteredDiv, StyledSelect, StyledTextInput, StyledSubtitle, AlertButton, createOptions }