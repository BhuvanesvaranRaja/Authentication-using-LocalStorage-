import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            gap: "20px",
            marginRight: "20px",
            marginTop: "20px",
          }}
        >
          <Link to={"/Signup"}>
            <Button style={{ padding: "15px", border: "none" }}>SIGN UP</Button>
          </Link>
          <Link to={"/Login"}>
            <Button
              style={{
                padding: "15px",
                border: "none",
                backgroundColor: "red",
              }}
            >
              LOG IN
            </Button>
          </Link>
        </div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "30vh",
            color: "red",
            fontWeight: "bolder",
          }}
        >
          This is the home page
        </h1>
      </>
    );
  }
}
