import axios from "axios";

const instance = axios.create({
  baseUrl: "https://europe-west1-shareyourstory-8a0f8.cloudfunctions.net/api",
});

export default instance;
