export const getUsers = (users) => ({
  type: "GET_USERS",
  payload:  {users} ,
});

export const deleteUserAction = (userId) => ({
  type: "DELETE_USER",
  payload: {userId} ,
});
