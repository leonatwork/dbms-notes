import React, { Component } from "react";
import Index from "./index";
import Notes from "./notes";
import { notes } from "../data/notes-object";

class Content extends Component {
  state = {
    activeNoteID: 5,
  };

  handleClick = (id) => {
    this.setState({ activeNoteID: id });
  };

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Index
            notes={notes}
            activeNoteID={this.state.activeNoteID}
            handleClick={this.handleClick}
          />
        </div>
        <div className="col">
          <Notes note={notes[this.state.activeNoteID].content} />
        </div>
      </div>
    );
  }
}

export default Content;
