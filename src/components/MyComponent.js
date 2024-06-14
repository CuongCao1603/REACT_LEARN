// class component
// function component

import React, { useEffect, useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {
//   // Kiem soat data trong component, state la 1 object trong js
//   // Thay doi gia tri thi gia tri cung thay doi theo
//   state = {
//     name: "",
//     address: "ha nam",
//     age: "",
//   };

//   handleClick(event) {
//     console.log(">> Click me my button");
//     console.log(" random ", Math.floor(Math.random() * 100 + 1));

//     // Merge State => react class
//     this.setState({
//       name: "Eric ",
//       age: Math.floor(Math.random() * 100 + 1),
//     });
//   }

//   handleOnMoverOver(event) {
//     console.log(event.pageX);
//   }

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     // bad code
//     // this.state.age = event.target.value
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//   };

//   render() {

//     return (
//       <div>

//         My name is {this.state.name} and I'm {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           ></input>

//           <label>Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           ></input>
//           <button>Submit</button>
//         </form>
//         {/* <UserInfor></UserInfor> */}
//       </div>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Cuong Cao", age: "30" },
    { id: 2, name: "Hoang Ha", age: "13" },
    { id: 3, name: "Hung Cao", age: "33" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };

  console.log(">>> Call me render");
  // Sử dụng [] đảm bảo useEffect chỉ chạy 1 lần
  useEffect(() => {
    // setTimeout(() => {
    //   document.title = "React with cuong";
    // }, 3000);
    if (listUsers.length === 0) {
      alert("You deleted all the users");
    }
    console.log(">>> Call me useEffect");
  }, [listUsers]);

  return (
    <>
      <br />
      <div className="a">
        <AddUserInfor
          // Tham chiếu đến giá trị của function
          // ten props va gia tri truyen vao cho props do
          // Truyen function tu cha xuong con
          handleAddNewUser={handleAddNewUser}
        />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        ></DisplayInfor>
      </div>
    </>
  );
};

export default MyComponent;
