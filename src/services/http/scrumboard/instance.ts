import axios from "axios";

const instance =  axios.create({
    baseURL:'http://localhost:80/',
    timeout:1200
})
export default instance