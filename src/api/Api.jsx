import axios from "axios";


const { REACT_APP_API_BASE_URL } = process.env;

console.log("Base URL");
console.log(REACT_APP_API_BASE_URL)

export default axios.create({
    baseURL: REACT_APP_API_BASE_URL,
    responseType: "json"
});