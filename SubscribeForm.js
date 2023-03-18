import React from "react";
import axios from "axios";

class SubscribeForm extends React.Component {
  state = {
    username: "",
    useremail: "",
    isChecked: false,
    isSubscribed: false,
  };

  storeData = (e) => {
    e.preventDefault();
    console.log("Data stored!");

    if (this.state.isChecked == false) {
      this.setState({ checkMessage: "Please check the box to proceed" });
    } else {
      axios.post(
        "https://crudcrud.com/api/ba0e46de9df844caac7493fa3055b82c/users",
        { name: this.state.username, email: this.state.useremail }
      );

      this.setState({
        useremail: "",
        username: "",
        isChecked: false,
        isSubscribed: true,
        checkMessage: "",
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <h1>{this.state.isSubscribed ? "You are now subscribed!" : null}</h1>
        <form action="#" method="POST" onSubmit={this.storeData}>
          <div>
            <label htmlFor="username">Name : </label>
            <input
              type="text"
              placeholder="Your name"
              id="username"
              value={this.state.username}
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="useremail">Email : </label>
            <input
              type="email"
              placeholder="Your email"
              id="useremail"
              value={this.state.useremail}
              onChange={(e) => {
                this.setState({ useremail: e.target.value });
              }}
            />
          </div>
          <div>
            <p>
              {this.state.isChecked ? (
                <input
                  type="checkbox"
                  checked
                  onClick={() => {
                    this.setState({ isChecked: false });
                  }}
                />
              ) : (
                <input
                  type="checkbox"
                  onClick={() => {
                    this.setState({ isChecked: true });
                  }}
                />
              )}
              I agree to the terms and conditions
            </p>
            <p>{this.state.checkMessage}</p>
          </div>
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default SubscribeForm;
