import React, { Component } from "react";

class Notes extends Component {
  state = {};
  render() {
    return <React.Fragment>{this.props.note}</React.Fragment>;
  }
}

export default Notes;
