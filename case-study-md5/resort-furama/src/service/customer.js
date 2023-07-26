import axios from "axios";

export async function getListCustomers(){
    const res =await axios.get("http://localhost:8080/customers")
    return res.data;
    
}