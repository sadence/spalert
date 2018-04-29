import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {StyledCenteredDiv} from './StyledComponents';

const StyledMenuItem = styled.div`
    font-size: 20px;
    padding: 5px;
    color: #4f4f4f;
`

export default function Success() {
  return (
    <StyledCenteredDiv>
        <StyledMenuItem><Link to="/newAlert">New Alert</Link></StyledMenuItem>
        <StyledMenuItem><Link to="/alerts">Edit Alerts</Link></StyledMenuItem>
        <StyledMenuItem><Link to="/brigade">Brigade Alerts</Link></StyledMenuItem>
        <StyledMenuItem><Link to="/newBrigade">New Brigade</Link></StyledMenuItem>
    </StyledCenteredDiv>
  );
}
