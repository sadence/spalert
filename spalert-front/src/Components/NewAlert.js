import React, { Component } from 'react';

import { StyledButton, StyledCenteredDiv, StyledSelect, StyledTextInput } from './StyledComponents'

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
            color: "",
            street: "",
            postalCode: "",
            collar: "",
        };
      }

    render() {
        const paragraphStyle = { alignSelf: "flex-start", marginLeft: "30vw", color: "#3F3333"}
        return (
            <form>
                <StyledCenteredDiv>
                    <h3>File a new alert</h3>

                    <p style={paragraphStyle}>Animal info</p>

                    <StyledSelect value={this.state.species} disabledOption={this.state.species===""} onChange={ (e)=> { this.setState({species: e.target.value})}}>
                        <option disabled="disabled" value="">Species</option>
                        {createOptions({ cat: 'Cat', dog: 'Dog', parrot: 'Parrot', rabbit : 'Rabbit', other: 'Other'})}
                    </StyledSelect>

                    <StyledTextInput placeholder="Color" value={this.state.color} onChange={(e)=>this.setState({color: e.target.value})}/>

                    <StyledSelect value={this.state.condition} disabledOption={this.state.condition===""} onChange={ (e)=> { this.setState({condition: e.target.value})}}>
                        <option disabled="disabled" value="">Condition</option>
                        {createOptions({ 0: 'Very Weak', 1: 'Weak', 2: 'Fine', 3 : 'Well'})}
                    </StyledSelect>

                    <StyledSelect value={this.state.collar} disabledOption={this.state.collar===""} onChange={ (e)=> { this.setState({collar: e.target.value})}}>
                        <option disabled="disabled" value="">Collar</option>
                        {createOptions({ 0: 'Wears a collar', 1: 'No collar'})}
                    </StyledSelect>

                    <p style={paragraphStyle}>Location</p>

                    <StyledTextInput placeholder="Street" autoComplete='street-address' value={this.state.street} onChange={(e)=>this.setState({street: e.target.value})}/>

                    <StyledTextInput placeholder="Postal Code" autoComplete='postal-code' value={this.state.postalCode} onChange={(e)=>this.setState({postalCode: e.target.value})}/>

                    <p style={paragraphStyle}>Receive an update</p>

                    <StyledTextInput placeholder="Email" autoComplete='email' value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>

                    <StyledButton onClick={(e)=>{e.preventDefault(); console.log(this.state)}}>Submit</StyledButton>

                </StyledCenteredDiv>
            </form>
        );
    }
}

export default NewAlert;