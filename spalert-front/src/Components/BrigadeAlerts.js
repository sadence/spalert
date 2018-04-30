import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { StyledSubtitle, AlertButton } from "./StyledComponents";
import PreviewAlert from "./PreviewAlert";
import { getData } from "../utils";
import { apiURL } from "../Config";

class BrigadeAlerts extends Component {
  constructor(props) {
    super(props);
    const alerts = [];
    this.state = { alerts, _id: this.props.match.params.id };
  }

  componentDidMount() {
    getData(`${apiURL}/brigades/${this.state._id}`)
      .then(({ alerts, brigade }) => this.setState({ brigade, alerts }))
      .catch(console.log);
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

export default withRouter(BrigadeAlerts);
