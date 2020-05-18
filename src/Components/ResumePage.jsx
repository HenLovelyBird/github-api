import React, { Component } from "react";

class ResumePage extends Component {
  render() {
    console.log(this.props);
    const userInfo = this.props.userInfo;
    const userRepos = this.props.userRepos;
    return (
      <>
        <div>
          <h3>{userInfo.login}</h3>
          <div>
            <h5>a passionate Github user</h5>
          </div>
          <div>
            <h6>https://www.example.com</h6>
          </div>
          <div>
            <p>On Github since {userInfo.created_at}</p>
          </div>
        </div>
        <div>
          <h4>Languages</h4>
          <div>{userRepos.name}</div>
        </div>
      </>
    );
  }
}

export default ResumePage;
