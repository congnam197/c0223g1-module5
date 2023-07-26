const initialValue = {
  users: [],
};

export const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload.users,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.userId),
      };
    default:
      return state;
  }
};
