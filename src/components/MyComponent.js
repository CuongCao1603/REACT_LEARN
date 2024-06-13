// class component
// function component

import React from "react";
import UserInfor from "./AddUserInfor";
class MyComponent extends React.Component {
  // Kiem soat data trong component, state la 1 object trong js
  // Thay doi gia tri thi gia tri cung thay doi theo
  state = {
    name: "",
    address: "ha nam",
    age: "",
  };

  handleClick(event) {
    console.log(">> Click me my button");
    console.log(" random ", Math.floor(Math.random() * 100 + 1));

    // Merge State => react class
    this.setState({
      name: "Eric ",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    // bad code
    // this.state.age = event.target.value
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        {/* <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button> */}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>

          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          ></input>
          <button>Submit</button>
        </form>
        {/* <UserInfor></UserInfor> */}
      </div>
    );
  }
}

export default MyComponent;
