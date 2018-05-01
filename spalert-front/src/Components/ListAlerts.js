import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
  StyledSubtitle,
  AlertButton,
  StyledSelect,
  createOptions,
  StyledCenteredDiv
} from "./StyledComponents";
import PreviewAlert from "./PreviewAlert";
import { getData, postData } from "../utils";

import { apiURL } from "../Config";

class ListAlerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      alerts: [],
      filteredAlerts: [],
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

  filterAlerts(status, arr) {
    if (status === "") {
      return arr || this.state.alerts;
    }
    const filteredAlerts = this.state.alerts.filter(
      alert => alert.status === status
    );
    return filteredAlerts;
  }

  updateAlerts() {
    getData(`${apiURL}/alerts`)
      .then(arr => {
        this.setState({
          alerts: arr,
          expanded: null,
          filteredAlerts: this.filterAlerts(this.state.filter, arr)
        });
      })
      .catch(console.log);
  }

  updateBrigadeRequest(alert_idx, brigade_id) {
    let alert = this.state.alerts[alert_idx];
    postData(`${apiURL}/alerts/${alert._id}`, {
      alert: { brigade: brigade_id }
    })
      .then(() => this.updateAlerts())
      .catch(console.log);
  }

  componentDidMount() {
    Promise.all([getData(`${apiURL}/alerts`), getData(`${apiURL}/brigades`)])
      .then(arr =>
        this.setState({
          alerts: arr[0],
          brigades: arr[1],
          filteredAlerts: this.filterAlerts(this.state.filter, arr[0])
        })
      )
      .catch(console.log);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <StyledSubtitle>Alerts: </StyledSubtitle>
        <StyledCenteredDiv>
          <StyledSelect
            value={this.state.filter}
            disabledOption={this.state.filter === ""}
            onChange={e =>
              this.setState({
                filteredAlerts: this.filterAlerts(e.target.value),
                filter: e.target.value
              })
            }
          >
            <option value="">
              Filter
            </option>
            {createOptions({
              assigned: "Assigned",
              unassigned: "Unassigned",
              success: "Success",
              failure: "Failure",
              cancelled: "Cancelled"
            })}
          </StyledSelect>
        </StyledCenteredDiv>
        <div>
          {this.state.filteredAlerts.length === 0 ? <StyledSubtitle>No alerts to show</StyledSubtitle> : null }
          {this.state.filteredAlerts.map((data, idx) => (
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
                <AlertButton
                  onClick={() => this.props.history.push(`/edit/${data._id}`)}
                >
                  Edit
                </AlertButton>
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
              ) : null }
            </PreviewAlert>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ListAlerts);
