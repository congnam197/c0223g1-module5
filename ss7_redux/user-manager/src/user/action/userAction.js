export const getUser = (list) => {
  return {
    type:'GET_LIST_USER',
    payload:list
  };
};
export const deleteUser =(user) =>{
    return {
        type :'DELETE_USER',
        payload: user
    }
}
