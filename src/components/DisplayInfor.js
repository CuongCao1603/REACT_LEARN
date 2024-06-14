import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// stateless vs stateful

// class DisplayInfor extends React.Component {
//   // constructor(props) {
//   //   console.log(">>> call constructor: 1");
//   //   super(props);
//   //   // babel compiler
//   //   this.state = {
//   //     isShowListUser: true,
//   //   };
//   // }

//   // // babel compiler
//   // state = {
//   //   isShowListUser: true,
//   // };
//   // handleShowhide = () => {
//   //   this.setState({
//   //     isShowListUser: !this.state.isShowListUser,
//   //   });
//   // };

//   // componentDidMount() {
//   //   console.log(">>> call me component did mount");
//   //   setTimeout(() => {
//   //     document.title = "Cuong cao update";
//   //   }, 3000);
//   // }

//   // componentDidUpdate(prevProps, preState, snapshot) {
//   //   console.log(">>> Component did update ", this.props, prevProps);
//   //   if(this.props.listUsers !== prevProps.listUsers){
//   //     if(this.props.listUsers.length === 5){
//   //       alert('You got 5')
//   //     }
//   //   }
//   // }

//   // template + logic js
//   render() {
//     console.log(">>> call me render ");
//     // destructurng array/object
//     // props => properties
//     // const listUsers = this.props.listUsers;
//     // console.table(listUsers)
//     const { listUsers } = this.props; // object

//     // console.log(listUsers);
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div
//                   //   style={{color: 'blue', paddingTop:'50px'}}
//                   >
//                     My name's {user.name}
//                   </div>
//                   <div>My age's {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props; // object

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  // this.state = {
  //   isShowHideListUser: true
  // }

  const handleShowHideListUser = () => {
    // alert("me");
    setShowHideListUser(!isShowHideListUser);
  };

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div
                //   style={{color: 'blue', paddingTop:'50px'}}
                >
                  My name's {user.name}
                </div>
                <div>My age's {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
