// import logo from "./logo.svg";
import "./App.scss";
// import AddUserInfor from "./components/AddUserInfor";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
// import DisplayInfor from "./components/DisplayInfor";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello CuongCao
        <MyComponent />
      </div>
    );
  }
}
export default App;
