export const userInfo = (userInfo) => {
  return {
      type: 'USER_INFO',
      payload: userInfo
  }
}

export const getUser = (state) => {
  return state.userReducer.user;
}
