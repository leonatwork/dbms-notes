import React, { Component } from "react";
import Index from "./index";
import Notes from "./notes";
import { notes } from "../data/notes-object";

class Content extends Component {
  state = {};

  render() {
    return (
      <div
        className="row"
        style={{ width: "80%", margin: "0 auto", paddingTop: "15px" }}
      >
        {!this.props.showNav && (
          <div className="col-3" style={{ borderRight: "1px solid #eee" }}>
            <Index
              notes={notes}
              activeNoteID={this.props.activeNoteID}
              handleClick={this.props.handleClick}
            />
          </div>
        )}
        <div className="col">
          <Notes note={notes[this.props.activeNoteID].content} />
        </div>
      </div>
    );
  }
}

export default Content;
