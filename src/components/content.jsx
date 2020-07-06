import React, { Component } from "react";
import Index from "./index";
import Notes from "./notes";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Index />
        </div>
        <div className="col">
          <Notes />
        </div>
      </div>
    );
  }
}

export default Content;
