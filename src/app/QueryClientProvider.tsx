"use client"
import { QueryClient, QueryClientProvider as QueryProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 1000 * 60 } } }))

    return (
        <QueryProvider client={queryClient} >
            <ReactQueryStreamedHydration>
                {children}
            </ReactQueryStreamedHydration>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryProvider>
    )
}

export default QueryClientProvider