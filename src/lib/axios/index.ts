import axios from "axios"
import { BASE_URL } from "./helper"

export const AxiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})
