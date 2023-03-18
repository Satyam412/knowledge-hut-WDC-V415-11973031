import axios from "axios";
import React from "react";

class AllSubscribers extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://crudcrud.com/api/ba0e46de9df844caac7493fa3055b82c/users")
      .then((res) => {
        this.setState({ users: res.data });
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user, no) => (
            <tr>
              <td>{++no}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default AllSubscribers;
