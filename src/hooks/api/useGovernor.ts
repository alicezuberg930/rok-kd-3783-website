import { useSnackbar } from "@/components/snackbar"
import { API_PATH } from "@/routes/api"
import { PATH_DASHBOARD } from "@/routes/paths"
import { getGovernorListAPI } from "@/utils/httpClient"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export default function useGovernor() {
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const router = useRouter()

    const getGovernorList = useCallback(() => {
        return useQuery({
            queryKey: [API_PATH.governor.list],
            queryFn: () => getGovernorListAPI(),
            placeholderData: (previousData, _) => previousData
        })
    }, [])

    const getGovernorDetails = useCallback((id: string) => {
        // return useQuery({
        //     queryKey: [API_PATH.DETAILS_PRODUCT, id],
        //     queryFn: () => getProductDetailsAPI({ id }),
        //     placeholderData: (previousData, _) => previousData,
        // })
    }, [])

    return {
        getGovernorList,
        getGovernorDetails
    }
}