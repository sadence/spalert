import React from "react";
import { Link } from "react-router-dom";


import {StyledCenteredDiv, StyledButton} from './StyledComponents';

export default function Success() {
  return (
    <StyledCenteredDiv>
      <h2>Your alert has been submitted. Thank you!</h2>
      <Link to="/">
        <StyledButton>Home</StyledButton>
      </Link>
    </StyledCenteredDiv>
  );
}
