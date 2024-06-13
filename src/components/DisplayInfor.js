import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowhide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // destructurng array/object
    // props => properties
    // const listUsers = this.props.listUsers;
    // console.table(listUsers)
    const { listUsers } = this.props; // object
    console.log(listUsers);
    return (
      <div className="display-infor-container">
        <div>
          <span
            onClick={() => {
              this.handleShowhide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list users: "
              : "Show list users: "}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div>
                  <div
                  //   style={{color: 'blue', paddingTop:'50px'}}
                  >
                    My name's {user.name}
                  </div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
