import React, { Component } from "react";

import { StyledSubtitle, AlertButton, StyledSelect } from "./StyledComponents";
import PreviewAlert from "./PreviewAlert";

class ListAlerts extends Component {
  constructor(props) {
    super(props);
    const data = [
      {
        id: 0,
        date: new Date(),
        species: "Dog",
        condition: 2,
        email: "michelle@example.com",
        color: "Blue",
        street: "Letellier",
        postalCode: "75015",
        collar: 0,
        status: "Assigned",
        brigade: ""
      },
      {
        id: 1,
        date: new Date(),
        species: "Dog",
        condition: 2,
        email: "michelle@example.com",
        color: "Blue",
        street: "Letellier",
        postalCode: "75015",
        collar: 0,
        status: "Assigned",
        brigade: "75015"
      },
      {
        id: 2,
        date: new Date(),
        species: "Dog",
        condition: 2,
        email: "michelle@example.com",
        color: "Blue",
        street: "Letellier",
        postalCode: "75015",
        collar: 0,
        status: "Assigned",
        brigade: ""
      }
    ];
    this.state = { data: data, brigade: "", expanded: null };
  }

  updateBrigade(idx) {
    return function(prevState) {
      prevState.data[idx].brigade = this.state.brigade;
      prevState.expanded = false;
      prevState.brigade = "";
      return { data: prevState.data };
    };
  }

  render() {
    return (
      <div>
        <StyledSubtitle>Alerts: </StyledSubtitle>
        <div>
          {this.state.data.map((data, idx) => (
            <PreviewAlert {...data} key={data.id}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <AlertButton
                  onClick={() => {
                    if (this.state.expanded !== idx) {
                      this.setState({ expanded: idx });
                    } else {
                      this.setState({ expanded: null });
                    }
                  }}
                >
                  Assign
                </AlertButton>
                <AlertButton>Edit</AlertButton>
              </div>
              {this.state.expanded === idx ? (
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledSelect
                    value={this.state.brigade}
                    disabledOption={this.state.brigade === ""}
                    onChange={e => this.setState({ brigade: e.target.value })}
                  >
                    <option>Brigade</option>
                    <option>Brigade2</option>
                  </StyledSelect>
                  <AlertButton
                    onClick={() => this.setState(this.updateBrigade(idx))}
                  >
                    Submit
                  </AlertButton>
                </div>
              ) : null}
            </PreviewAlert>
          ))}
        </div>
      </div>
    );
  }
}

export default ListAlerts;
