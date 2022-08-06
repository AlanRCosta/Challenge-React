import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.github.com",
});

export const CommitApi = axios.create({
  baseURL: "https://api.github.com/repos",
});
