import axios from "axios";
export async function getInfo(){
    const response = await axios.get("http://localhost:8081/covids")
    return response.data;
}