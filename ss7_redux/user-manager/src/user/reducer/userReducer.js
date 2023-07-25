const initialValue = {
  id: "",
  name: "",
  username: "",
  email: "",
};

export const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...action.payload,
      };
    case "GET_LIST_USER":
      return {
        ...action.payload,
      };
    default:
      return {
        state,
      };
  }
};
