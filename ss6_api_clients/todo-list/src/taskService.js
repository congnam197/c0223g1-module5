import axios from "axios";
export async function getTodoList() {
  const res = await axios.get("http://localhost:8080/todoList");
  return res.data;
}
 export async function createTask(task){
    await axios .post('http://localhost:8080/todoList',task);

 }
