import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userNameError: "",
      userPasswordError: "",
    };
  }

  //   validateForm = (e) => {
  //     e.preventDefault();
  //     if (document.forms["loginForm"]["userName"].value.length == 0) {
  //       this.setState({ userNameError: "Please enter a username" });
  //     } else {
  //       this.setState({ userNameError: "Username looks good" });
  //     }
  //   };

  validateUserName = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (e.target.value.length < 10) {
      this.setState({ userNameError: "Please enter a username" });
    } else {
      this.setState({ userNameError: "Username looks good" });
    }
  };

  render() {
    return (
      // onSubmit={this.validateForm}
      <form name="loginForm">
        <input
          placeholder="Your name"
          type="text"
          name="userName"
          onChange={this.validateUserName}
        />
        <br />
        <p id="userNameError">{this.state.userNameError}</p>
        <input placeholder="Password" type="password" name="userPassword" />
        <br />
        <p id="userPasswordError">{this.state.userPasswordError}</p>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;
