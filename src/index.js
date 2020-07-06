import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Content from "./components/content";

ReactDOM.render(
  <React.Fragment>
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Header />
      <Content />
    </div>
  </React.Fragment>,
  document.getElementById("root")
);
