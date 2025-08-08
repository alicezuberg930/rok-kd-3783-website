import { useSnackbar } from "@/components/snackbar"
import { API_PATH } from "@/routes/api"
import { PATH_DASHBOARD } from "@/routes/paths"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export default function useProduct() {
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const router = useRouter()

    const getProductList = useCallback(() => {
        // return useQuery({
        //     queryKey: [API_PATH.product.list],
        //     queryFn: () => getProductListAPI(),
        //     placeholderData: (previousData, _) => previousData
        // })
    }, [])

    const getProductDetails = useCallback((id: string) => {
        // return useQuery({
        //     queryKey: [API_PATH.DETAILS_PRODUCT, id],
        //     queryFn: () => getProductDetailsAPI({ id }),
        //     placeholderData: (previousData, _) => previousData,
        // })
    }, [])

    return {
        getProductList,
        getProductDetails
    }
}