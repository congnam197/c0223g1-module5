import { useEffect, useState } from "react";
import { deleteUser, getUsersList } from "../service/usersService";


export default function UsersList() {
  const [users, setUser] = useState([]);
  const getList = async () => {
    const data = await getUsersList();
    setUser(data);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="table">
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={async () => {
                      if (window.confirm("do you want to delete")) {
                        deleteUser(user.id)
                          .then(() => {
                            getList();
                            alert("delete successfully");
                          })
                          .catch((error) => {
                            console.log(error.message);
                          });
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
