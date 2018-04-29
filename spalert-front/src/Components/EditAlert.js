import React, { Component } from "react";
import  { withRouter } from 'react-router-dom';

import {
  StyledButton,
  StyledCenteredDiv,
  StyledSelect,
  StyledTextInput,
  StyledSubtitle,
  createOptions
} from "./StyledComponents";
import { postData, getData } from "../utils";
import { apiURL } from "../Config";


class EditAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert : {
        _id: 0,
        species: "",
        condition: "",
        email: "",
        color: "",
        addressStreet: "",
        postalCode: "",
        collar: "",
        status: ""
      },
      _id: this.props.match.params.id
    };
    console.log(this);
  }

  componentDidMount(){
    getData(`${apiURL}/alerts/${this.state._id}`)
    .then((alert)=>this.setState(Object.assign({}, this.state, {alert})))
    .catch(console.log);
  }

  submitChanges() {
      console.log(this.state);
      postData(`${apiURL}/alerts/${this.state.alert._id}`, {alert: this.state.alert})
      .then(()=>this.props.history.push('/alerts'));
  }

  updateAlertState(attr, value){
    this.setState(({alert})=> Object.assign(alert, {[attr]: value}));
  }

  render() {
    console.log(this.state);
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


          <StyledSelect
            value={this.state.alert.status}
            disabledOption={this.state.alert.status === ""}
            onChange={e => this.updateAlertState("status", e.target.value)}
          >
            <option disabled="disabled" value="">
              Status
            </option>
            {createOptions({ assigned: "Assigned", unassigned: "Unassigned", success: "Sucess",  failed: "Failed", cancelled: "Cancelled",  })}
          </StyledSelect>

          <StyledButton
            onClick={e => {
              e.preventDefault();
              this.submitChanges();
            }}
          >
            Submit
          </StyledButton>
        </StyledCenteredDiv>
      </form>
    );
  }
}

export default withRouter(EditAlert);
