import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getData } from "../utils";
import { apiURL } from "../Config";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 4vh;
    flex-direction: column;
    margin-left: 10vh;
    margin-right: 10vh;
    background-color: #e5eef1;
    border-radius: 10px;
    padding: 5vh;
`

const StyledMenuItem = styled.div`
  font-size: 20px;
  padding: 5px;
  color: #4f4f4f;
`;

const StyledMenuSubItem = styled.div`
  font-size: 18px;
  padding-left: 10px;
  color: #4f4f4f;
`;

class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { brigades: [] };
  }

  componentDidMount() {
    getData(`${apiURL}/brigades`)
      .then(arr => {
        this.setState({ brigades: arr });
      })
      .catch(console.log);
  }

  render() {
    console.log(this.state);
    return (
      <StyledDiv>
        <StyledMenuItem>
          <Link to="/newAlert">New Alert</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/alerts">Edit Alerts</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          Brigade Alerts:
          {this.state.brigades.map((brigade, idx) => {
            return (
              <StyledMenuSubItem key={brigade._id}>
                <Link to={`/brigades/${brigade._id}`}>
                  <div>{brigade.name}</div>
                </Link>
              </StyledMenuSubItem>
            );
          })}
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/newBrigade">New Brigade</Link>
        </StyledMenuItem>
      </StyledDiv>
    );
  }
}

export default HomeMenu;
