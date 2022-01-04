import axios from "axios";

const instance = axios.create({
  baseURL: "https://dipadana.my.id"
});

export default instance;
