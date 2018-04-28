import React from 'react';
import DogImage from '../Images/Dog.svg';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4vh;
`

export default function Banner(props) {
    const imageSize = '16vh';
    return (
    <StyledDiv>
        <img src={DogImage} style={{ width: imageSize, height: imageSize}} alt="Dog"/>
        <span style={{fontSize: "8vh"}}>SPAlert</span>
    </StyledDiv>
    );
  }