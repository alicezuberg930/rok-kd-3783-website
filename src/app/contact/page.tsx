import ContactPage from "@/page/ContactPage"
import generateMetadata from "@/utils/seo"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({ title: "Liên hệ" })

export default function page() {
    return (
        <ContactPage />
    )
}