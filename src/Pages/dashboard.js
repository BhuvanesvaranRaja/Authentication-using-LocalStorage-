import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

export default class dashboard extends Component {
  render() {
    return (
      <>
        <Link to={"/"}>
          <Button style={{ float: "right", margin: "20px" }}>LOGOUT</Button>
        </Link>
        <h1
          style={{
            textAlign: "center",
            marginTop: "30vh",
            color: "red",
            fontWeight: "bolder",
          }}
        >
          this is the dashboard page
        </h1>
      </>
    );
  }
}
