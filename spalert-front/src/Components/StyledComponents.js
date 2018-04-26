import styled from 'styled-components';

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
export { StyledButton, StyledCenteredDiv, StyledSelect, StyledTextInput }