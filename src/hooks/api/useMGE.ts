import { useSnackbar } from "@/components/snackbar"
import { API_PATH } from "@/routes/api"
import { PATH_DASHBOARD } from "@/routes/paths"
import { getMGEDetailsAPI, getMGEListAPI } from "@/utils/httpClient"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export default function useMGE() {
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const router = useRouter()

    const getMGEList = useCallback(() => {
        return useQuery({
            queryKey: [API_PATH.mge],
            queryFn: () => getMGEListAPI(),
            placeholderData: (previousData, _) => previousData
        })
    }, [])

    const getMGEDetails = useCallback((id: string) => {
        return useQuery({
            queryKey: [API_PATH.mge, id],
            queryFn: () => getMGEDetailsAPI({ id }),
            placeholderData: (previousData, _) => previousData,
        })
    }, [])

    return {
        getMGEList,
        getMGEDetails
    }
}