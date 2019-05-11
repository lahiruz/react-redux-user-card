import React, { Component } from "react";
import user from "./images/lahiru.png";
import "./App.css";
import {store} from "./store";

class App extends Component {
  appState = store.getState();

  render() {
    return (
      <div className="app">
        <section className="user-img">
          <img src={user} alt="user" />
        </section>

        <section className="user-info">
          <p>
            {" "}
            <span className="faint">I am</span> a {this.appState.description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {this.appState.likes}
          </p>

          <p className="user-info-details user-info-divider faint">
            <span>Name: </span>
            <span>{this.appState.name}</span>
          </p>
          <p className="user-info-details faint">
            <span>Location: </span>
            <span>{this.appState.location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
