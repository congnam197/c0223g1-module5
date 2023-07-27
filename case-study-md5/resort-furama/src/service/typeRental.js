import axios from "axios";
export async function getTypeRental(){
    const response = await axios.get("http://localhost:8080/typeRental")
    return response.data;
}