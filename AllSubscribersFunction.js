import axios from "axios";
import { useEffect } from "react";

const AllSubscribersFunction = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/804a4ffe3db74b93bd90cd40d38e9435/users")
      .then((res) => {
        setUsers([res.data]);
      });
  });

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
        {users.map((user, no) => (
          <tr>
            <td>{++no}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllSubscribersFunction;
