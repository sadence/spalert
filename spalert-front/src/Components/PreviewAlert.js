import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledDiv = styled.div`
    display: grid;
    margin: auto;
`

const StyledElement = styled.div`
    margin: auto;
    text-align: justify;
`
const AlertDiv = styled.div`
    margin:auto;
    margin-top: 10px;
    margin-bottom: 15px;
    background-color: snow;
    padding-top: 20px;
    width: 80vw;
    border-radius: 10px;
    background-color: #e5eef1;
`

class previewAlert extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render(){
        return (
            <AlertDiv>
                <StyledDiv>
                    <StyledElement style={{ gridColumn: "span 2" }}>{moment(this.props.date).format('MM DD h:mm')}</StyledElement>
                    <StyledElement style={{ gridColumn: "span 2" }}>{this.props.street} {this.props.postalCode}</StyledElement>
                    <StyledElement>{this.props.collar ? "Collar" : "No Collar"}</StyledElement>
                    <StyledElement>{this.props.color}</StyledElement>
                    <StyledElement>{this.props.species}</StyledElement>
                    <StyledElement>{this.props.status}</StyledElement>
                    <StyledElement>{this.props.brigade}</StyledElement>
                </StyledDiv>
                        {this.props.children}
            </AlertDiv>);
    }
}

export default previewAlert;