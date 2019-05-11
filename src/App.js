import React, { Component } from "react";
import user from "./images/lahiru.png";
import "./App.css";

class App extends Component {
  state = {
    name: "Lahiru Jayamanna",
    description: "IT / Software Professional with 4 years of experience in Front-end Development using JavaScript, TypeScript, React, Angular, HTML5, CSS3, SCSS and Latest front-end best practices.",
    likes: "Cricket, Futsal, Carom, Badminton & Checkers",
    location: "Open Source"
  };
  render() {
    const { name, description, likes, location } = this.state;
    return (
      <div className="app">
        <section className="user-img">
          <img src={user} alt="user" />
        </section>

        <section className="user-info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="user-info-details user-info-divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="user-info-details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
