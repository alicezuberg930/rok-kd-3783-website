import { API_PATH } from "@/routes/api"
import axios from "./axios"

// sản phẩm
export const getProductListAPI = async () => {
    let response = await axios({ url: API_PATH.product.list, method: "GET" })
    return response.data
}

export const sendMEGApplicationAPI = async (form: FormData) => {
    let response = await axios({ url: API_PATH.mge, method: "POST", data: form })
    return response.data
}
