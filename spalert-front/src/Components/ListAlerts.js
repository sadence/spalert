import React, { Component } from "react";
import  { withRouter, Redirect } from 'react-router-dom';

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
        brigade: {}
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
        brigade: {
          _id: "0",
          name: "75015",
          email: "75015@example.com"
        }
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

  updateBrigades() {
    getData(`${apiURL}/alerts`)
      .then(arr => {
        this.setState({ alerts: arr, expanded: null });
      })
      .catch(console.log);
    }

  updateBrigadeRequest(alert_idx, brigade_id) {
    let alert = this.state.alerts[alert_idx];
    postData(`${apiURL}/alerts/${alert._id}`, {
      alert: { brigade: brigade_id }
    })
    .then(()=>this.updateBrigades())
    .catch(console.log);
  }

  componentDidMount() {
    getData(`${apiURL}/alerts`)
      .then(arr => {
        this.setState({ alerts: arr });
      })
      .catch(console.log);

    getData(`${apiURL}/brigades`)
      .then(arr => {
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
                <AlertButton onClick={()=> this.props.history.push(`/edit/${data._id}`) }>Edit</AlertButton>
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
                    {this.state.brigades.map((brigade, brigade_idx) => {
                      return (
                        <option key={brigade._id} value={brigade_idx}>
                          {brigade.name}
                        </option>
                      );
                    })}
                  </StyledSelect>
                  <AlertButton
                    onClick={() => {
                      this.updateBrigadeRequest(
                        idx,
                        this.state.brigades[this.state.brigade]._id
                      );
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

export default withRouter(ListAlerts);
