import { API_PATH } from "@/routes/api"
import axiosConfig from "./axios"
import axios from "axios"
import { IResponse } from "@/@types/response"
import { IMGEApplication } from "@/@types/mge"

export const getGovernorListAPI = async () => {
    let response = await axios({ url: API_PATH.governor.list, method: "GET" })
    return response.data
}

export const sendMEGApplicationAPI = async ({ form }: { form: FormData }) => {
    let response = await axiosConfig({ url: API_PATH.mge, method: "POST", data: form })
    return response.data
}

export const getMGEListAPI = async () => {
    let response = await axiosConfig({ url: API_PATH.mge, method: "GET" })
    return response.data
}

export const getMGEDetailsAPI = async ({ id }: { id: string }) => {
    let response = await axiosConfig<IResponse<IMGEApplication>>({ url: `${API_PATH.mge}/${id}`, method: "GET" })
    return response.data
}