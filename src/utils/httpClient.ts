import { API_PATH } from "@/routes/api"
import axiosConfig from "./axios"
import axios from "axios"

export const getGovernorListAPI = async () => {
    let response = await axios({ url: API_PATH.governor.list, method: "GET" })
    return response.data
}

export const sendMEGApplicationAPI = async (form: FormData) => {
    let response = await axiosConfig({ url: API_PATH.mge, method: "POST", data: form })
    return response.data
}

