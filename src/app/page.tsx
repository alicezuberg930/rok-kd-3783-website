import HomePage from "@/page/HomePage";
import generateMetadata from "@/utils/seo"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({ title: "Home" })

export default function page() {
  return (<HomePage />)
}