import logo from "./logo.svg";
import "./App.scss";
import AddUserInfor from "./components/AddUserInfor";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import DisplayInfor from "./components/DisplayInfor";
import React from "react";

class App extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Cuong Cao", age: "30" },
      { id: 2, name: "Hoang Ha", age: "13" },
      { id: 3, name: "Hung Cao", age: "33" },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log(">>> check data from parent: ", userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  render() {
    // DRY: don't repeat youseft
    return (
      <div>
        <AddUserInfor
          // Tham chiếu đến giá trị của function
          // ten props va gia tri truyen vao cho props do
          // Truyen function tu cha xuong con
          handleAddNewUser={this.handleAddNewUser}
        />
        <br />

        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
      </div>
    );
  }
}

export default App;
