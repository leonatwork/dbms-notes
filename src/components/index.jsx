import React, { Component } from "react";

class Index extends Component {
  state = {};
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.notes.map((note) => {
          let className = "list-group-item";
          if (note.id === this.props.activeNoteID) className += " active";
          return (
            <li
              key={note.id}
              className={className}
              onClick={() => this.props.handleClick(note.id)}
              style={{ cursor: "pointer" }}
            >
              {note.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Index;
