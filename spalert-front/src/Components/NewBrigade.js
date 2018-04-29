import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
  StyledButton,
  StyledCenteredDiv,
  StyledTextInput
} from "./StyledComponents";
import { putData } from "../utils";
import { apiURL } from "../Config";

class NewBrigade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brigade: {
        name: "",
        email: ""
      }
    };
  }

  submitNewBrigade() {
    putData(`${apiURL}/brigades`, { brigade: this.state.brigade }).then(() =>
      this.props.history.push("/alerts")
    );
  }

  updateBrigadeState(attr, value) {
    this.setState(prevState => {
      const brigade = Object.assign({}, prevState.brigade, { [attr]: value });
      return { brigade };
    });
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <StyledCenteredDiv>
          <h3>Create a new brigade</h3>

          <StyledTextInput
            placeholder="Name"
            value={this.state.brigade.name}
            onChange={e => this.updateBrigadeState("name", e.target.value)}
          />

          <StyledTextInput
            placeholder="Email"
            autoComplete="email"
            value={this.state.brigade.email}
            onChange={e => this.updateBrigadeState("email", e.target.value)}
          />

          <StyledButton
            onClick={e => {
              e.preventDefault();
              this.submitNewBrigade();
            }}
          >
            Submit
          </StyledButton>
        </StyledCenteredDiv>
      </form>
    );
  }
}

export default withRouter(NewBrigade);
