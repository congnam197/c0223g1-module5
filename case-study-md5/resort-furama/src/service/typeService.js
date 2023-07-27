import axios from "axios";
export async function getTypeService() {
  const res = await axios.get("http://localhost:8080/typeService");
  return res.data;
}
