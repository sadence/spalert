import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
  StyledButton,
  StyledCenteredDiv,
  StyledSelect,
  StyledTextInput,
  StyledSubtitle,
  createOptions
} from "./StyledComponents";
import { putData } from "../utils";
import { apiURL } from "../Config";

class NewAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {
        species: "",
        condition: "",
        email: "",
        color: "",
        addressStreet: "",
        postalCode: "",
        collar: ""
      }
    };
  }

  submitNewAlert() {
    putData(`${apiURL}/alerts`, { alert: this.state.alert }).then(() =>
      this.props.history.push("/success")
    );
  }

  updateAlertState(attr, value){
    this.setState((prevState)=> {
        const alert = Object.assign({}, prevState.alert, {[attr]: value});
        return {alert};
    });
  }

  render() {
    return (
      <form>
        <StyledCenteredDiv>
          <h3>File a new alert</h3>

          <StyledSubtitle>Animal info</StyledSubtitle>

          <StyledSelect
            value={this.state.alert.species}
            disabledOption={this.state.alert.species === ""}
            onChange={e => this.updateAlertState("species", e.target.value)}
          >
            <option disabled="disabled" value="">
              Species
            </option>
            {createOptions({
              cat: "Cat",
              dog: "Dog",
              parrot: "Parrot",
              rabbit: "Rabbit",
              other: "Other"
            })}
          </StyledSelect>

          <StyledTextInput
            placeholder="Color"
            value={this.state.alert.color}
            onChange={e => this.updateAlertState("color", e.target.value)}
          />

          <StyledSelect
            value={this.state.alert.condition}
            disabledOption={this.state.alert.condition === ""}
            onChange={e => this.updateAlertState("condition", e.target.value)}
          >
            <option disabled="disabled" value="">
              Condition
            </option>
            {createOptions({ 0: "Very Weak", 1: "Weak", 2: "Fine", 3: "Well" })}
          </StyledSelect>

          <StyledSelect
            value={this.state.alert.collar}
            disabledOption={this.state.alert.collar === ""}
            onChange={e => this.updateAlertState("collar", e.target.value)}
          >
            <option disabled="disabled" value="">
              Collar
            </option>
            {createOptions({ 1: "Wears a collar", 0: "No collar" })}
          </StyledSelect>

          <StyledSubtitle>Location</StyledSubtitle>

          <StyledTextInput
            placeholder="Street"
            autoComplete="street-address"
            value={this.state.alert.addressStreet}
            onChange={e => this.updateAlertState("addressStreet", e.target.value)}
          />

          <StyledTextInput
            placeholder="Postal Code"
            autoComplete="postal-code"
            value={this.state.alert.postalCode}
            onChange={e => this.updateAlertState("postalCode", e.target.value)}
          />

          <StyledSubtitle>Receive an update</StyledSubtitle>

          <StyledTextInput
            placeholder="Email"
            autoComplete="email"
            value={this.state.alert.email}
            onChange={e => this.updateAlertState("email", e.target.value)}
          />

          <StyledButton
            onClick={e => {
              e.preventDefault();
              this.submitNewAlert();
            }}
          >
            Submit
          </StyledButton>
        </StyledCenteredDiv>
      </form>
    );
  }
}

export default withRouter(NewAlert);
