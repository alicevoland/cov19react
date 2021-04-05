import axios from "axios";


var baseUrl;
if (process.env.NODE_ENV === 'production') {
    baseUrl = "https://cov19api.herokuapp.com/api/";
} else {
    baseUrl = "http://localhost:8080/api/";
}

console.log("Base URL");
console.log(baseUrl)

export default axios.create({
    baseURL: baseUrl,
    responseType: "json"
});