import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:500/api"
});