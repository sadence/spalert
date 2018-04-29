import React, { Component } from "react";

import { StyledSubtitle, AlertButton } from "./StyledComponents";
import PreviewAlert from "./PreviewAlert";

class BrigadeAlerts extends Component {
  constructor(props) {
    super(props);
    const data = [
      {
        _id: 0,
        date: new Date(),
        species: "Dog",
        condition: 2,
        email: "michelle@example.com",
        color: "Blue",
        adressStreet: "Letellier",
        postalCode: "75015",
        collar: 0,
        status: "Assigned",
        brigade: {
          name: "75015"
        }
      },
      {
        _id: 1,
        date: new Date(),
        species: "Dog",
        condition: 2,
        email: "michelle@example.com",
        color: "Blue",
        adressStreet: "Letellier",
        postalCode: "75015",
        collar: 0,
        status: "Assigned",
        brigade: {
          name: "75015"
        }
      },
      {
        _id: 2,
        date: new Date(),
        species: "Dog",
        condition: 2,
        email: "michelle@example.com",
        color: "Blue",
        adressStreet: "Letellier",
        postalCode: "75015",
        collar: 0,
        status: "Assigned",
        brigade: {
          name: "75015"
        }
      }
    ];
    this.state = { data: data };
  }
  render() {
    return (
      <div>
        <StyledSubtitle>Alerts: </StyledSubtitle>
        <div>
          {this.state.data.map(data => (
            <PreviewAlert {...data} key={data._id}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <AlertButton>Saved</AlertButton>
                <AlertButton>Abandonned</AlertButton>
              </div>
            </PreviewAlert>
          ))}
        </div>
      </div>
    );
  }
}

export default BrigadeAlerts;
