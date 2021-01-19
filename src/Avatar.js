import React, { Component } from "react";
import "./Avatar.css";
import "tachyons";
import Avatarlist from "./Avatarlist";

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to the Jurassicpark",
    };
  }

  namechange() {
    this.setState({
      name: "Welcome to the New Jurassicpark",
    });
  }
  render() {
    const avatarlistarray = [
      {
        id: 1,
        name: "Firoz",
        work: "Web devloper",
      },
      {
        id: 2,
        name: "Akhlaque",
        work: "Web devloper",
      },
      {
        id: 3,
        name: "Aman",
        work: "Cloud",
      },
      {
        id: 4,
        name: "Ashfaque",
        work: "Data Science",
      },
    ];

    const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
      return (
        <Avatarlist
          key={i}
          id={avatarlistarray[i].name}
          work={avatarlistarray[i].work}
          name={avatarlistarray[i].name}
        />
      );
    });

    return (
      <div className="mainpage">
        <h1>{this.state.name}</h1>
        {arrayavatarcard}
        <button onClick={() => this.namechange()}>Subscribe</button>
      </div>
    );
  }
}

export default Avatar;
