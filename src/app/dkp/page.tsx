import DKPPage from "@/page/DKPPage";
import generateMetadata from "@/utils/seo"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({ title: "DKP List" })

export default function page() {
  return (<DKPPage />)
}