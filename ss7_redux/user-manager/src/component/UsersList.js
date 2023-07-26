import { deleteUser, getUsersList } from "../service/usersService";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction, getUsers } from "../user/action/userAction";
import axios from "axios";

export default function UsersList() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const getList = () => {
    return async (dispatch) => {
      const users = await getUsersList();
      dispatch(getUsers(users));
    };
  };

  const deleteUserById = (userId) => {
    return async (dispatch) => {
      console.log(userId);
      await deleteUser(userId);
      dispatch(deleteUserAction(userId));
      alert("delete Successfully");
    };
  };
  const confirmDelete = (userId) => {
    console.log(userId);
    if (window.confirm("Are you sure delete this user?")) {
      dispatch(deleteUserById(userId));
    }
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>User List</h1>
        </div>
        <div className="get-user">
          <button className="btn-display" onClick={() => dispatch(getList())}>
            Get Users
          </button>
        </div>
      </div>
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
                      onClick={() => confirmDelete(`${user.id}`)}
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
    </>
  );
}
