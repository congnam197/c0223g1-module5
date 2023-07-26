import { useEffect, useState } from "react";
import { deleteUser, getUsersList } from "../service/usersService";
import { useDispatch } from "react-redux";
import { userInfo } from "../user/action/userAction";

export default function UsersList() {
  const dispatch = useDispatch();

  const onGetList = () => {
    dispatch(userInfo(users));
  };
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [deleteUserById, setDeleteUserById] = useState(null);

  const getList = async () => {
    const data = await getUsersList();
    setUsers(data);
  };

  useEffect(() => {
    getList();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await deleteUser(deleteUserById);
    setUsers(users.filter((user) => user.id !== deleteUserById));
    setDeleteUserById(null);
  };

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
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                  >
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => setDeleteUserById(user.id)}
                    >
                      Delete
                    </button>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Delete User
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={onSubmit}>
              <div class="modal-body">
                {deleteUserById && (
                  <>
                    <p>Are you sure you want to delete this user?</p>
                    <p className="warning">ID: {deleteUserById}</p>
                    <p className="warning">
                      Name:{" "}
                      {users.find((user) => user.id === deleteUserById)?.name}
                    </p>
                    <p className="text-warning">
                      <small>This action cannot be undone.</small>
                    </p>
                  </>
                )}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  disabled={!deleteUserById}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
