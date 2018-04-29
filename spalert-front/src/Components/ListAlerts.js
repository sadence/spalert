import React, { Component } from "react";

import { StyledSubtitle, AlertButton, StyledSelect } from "./StyledComponents";
import PreviewAlert from "./PreviewAlert";
import { getData, postData } from "../utils";

import { apiURL } from "../Config";

class ListAlerts extends Component {
  constructor(props) {
    super(props);
    const data = [
      {
        _id: "0",
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
        _id: "1",
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
      }
    ];
    this.state = {
      alerts: data,
      brigade: "",
      expanded: null,
      brigades: [
        {
          _id: "0",
          name: "75015",
          email: "75015@example.com"
        }
      ]
    };
  }

  updateBrigade(idx) {
    return function(prevState) {
      prevState.alerts[idx].brigade = this.state.brigade;
      prevState.expanded = false;
      prevState.brigade = "";
      return { alerts: prevState.alerts };
    };
  }

  updateBrigadeRequest(idx, brigade_id) {
    let alert = this.state.alerts[idx];
    postData(`${apiURL}/alerts/${alert._id}`, { brigade: brigade_id })
    .catch(console.log);
  }

  componentDidMount() {
    getData(`${apiURL}/alerts`)
      .then(arr => {
        console.log(arr);
        this.setState({ alerts: arr });
      })
      .catch(console.log);

    getData(`${apiURL}/brigades`)
      .then(arr => {
        console.log(arr);
        this.setState({ brigades: arr });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <StyledSubtitle>Alerts: </StyledSubtitle>
        <div>
          {this.state.alerts.map((data, idx) => (
            <PreviewAlert {...data} key={data._id}>
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
                    <option disabled="disabled" value="">
                      Brigade
                    </option>
                    {this.state.brigades.map(brigade => {
                      return <option key={brigade._id}>{brigade.name}</option>;
                    })}
                  </StyledSelect>
                  <AlertButton
                    onClick={() => {
                      this.setState(this.updateBrigade(idx));
                    }}
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
