import axios from "axios";

const instance = axios.create({
  baseURL: "https://dipadana.my.id",
  headers: {
    Authorization: localStorage.getItem("token")
  }
});

export default instance;
