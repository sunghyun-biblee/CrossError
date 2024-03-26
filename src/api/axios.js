import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "452a21e2700421ba52a3f33b81bc4f2f",
    language: "Ko-KR",
  },
});

export default instance;
