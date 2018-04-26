import React, { Component } from 'react';
import styled from 'styled-components';

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4vh;
    flex-direction: column;
`

const TextInput = styled.input`
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

function createOptions(options){
    return Object.keys(options).map((key) => <option value={key} key={key}>{options[key]}</option>);
}

class NewAlert extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(), 
            species: "",
            condition: "",
            email: "",
            color: ""
        };
      }
      
    render() {
        return (
            <form>
                <CenteredDiv>
                    <p> File a new alert:</p>

                        <StyledSelect value={this.state.species} disabledOption={this.state.species===""} onChange={ (e)=> { this.setState({species: e.target.value})}}>
                        <option disabled="disabled" value="">Species</option>
                        {createOptions({ cat: 'Cat', dog: 'Dog', parrot: 'Parrot', rabbit : 'Rabbit'})}
                        </StyledSelect>


                        <TextInput placeholder="Color" value={this.state.color} onChange={(e)=>this.setState({color: e.target.value})}/> 

                        <StyledSelect value={this.state.condition} disabledOption={this.state.condition===""} onChange={ (e)=> { this.setState({condition: e.target.value})}}>
                        <option disabled="disabled" value="">Condition</option>
                        {createOptions({ 0: 'Very Weak', 1: 'Weak', 2: 'Fine', 3 : 'Well'})}
                        </StyledSelect>

                        <TextInput placeholder="email" alue={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/> 
                </CenteredDiv>
            </form>
        );
    }
}

export default NewAlert;