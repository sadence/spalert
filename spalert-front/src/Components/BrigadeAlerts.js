import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { StyledSubtitle, AlertButton } from "./StyledComponents";
import PreviewAlert from "./PreviewAlert";
import { getData, postData } from "../utils";
import { apiURL } from "../Config";

class BrigadeAlerts extends Component {
  constructor(props) {
    super(props);
    const alerts = [];
    this.state = { alerts, _id: this.props.match.params.id };
  }

  componentDidMount() {
    this.fetchAlerts();
  }

  fetchAlerts() {
    getData(`${apiURL}/brigades/${this.state._id}`)
      .then(({ alerts, brigade }) => this.setState({ brigade, alerts }))
      .catch(console.log);
  }

  submitResult(status, alert_id) {
    postData(`${apiURL}/alerts/${alert_id}`, {
      alert: { status },
      brigade_done: true
    }).then(() => this.fetchAlerts());
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <StyledSubtitle>Alerts: </StyledSubtitle>
        <div>
          {this.state.alerts.map(data => (
            <PreviewAlert {...data} key={data._id}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <AlertButton
                  onClick={() => this.submitResult("success", data._id)}
                >
                  Saved
                </AlertButton>
                <AlertButton
                  onClick={() => this.submitResult("failure", data._id)}
                >
                  Abandonned
                </AlertButton>
              </div>
            </PreviewAlert>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(BrigadeAlerts);
