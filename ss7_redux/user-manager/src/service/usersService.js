import axios from "axios";

export async function getUsersList() {
  //   axios.defaults.baseURL("http://localhost:8080/users");
  const response = await axios.get("http://localhost:8080/users");
  return response.data;
}
export async function deleteUser(id) {
  await axios.delete("http://localhost:8080/users/" + id);
}
