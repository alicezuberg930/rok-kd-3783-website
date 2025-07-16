import CartPage from "@/page/CartPage"
import generateMetadata from "@/utils/seo"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({ title: "Giỏ hàng" })

export default function page() {
    return (
        <CartPage />
    )
}