 import axios from 'axios'
 export async function getListService(){
    const res = await axios.get("http://localhost:8080/services")
    return res.data;
 }