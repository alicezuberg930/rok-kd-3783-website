import ProductDetailsPage from "@/page/ProductDetailsPage";
import generateMT from "@/utils/seo"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    // const id = slug.split('-').at(-1)
    // const response = await instanceWithoutToken({ url: `${ENDPOINT.PRODUCT_DETAILS}/${id}`, method: "GET", params: { id } })
    // const product = response.data.product as Product
    return generateMT({
        title: `${slug}`,
        description: "Find the best products here.",
        image: "/assets/opengraph-image.jpg",
        url: `https://wibu-website-cms.vercel.app/product/${slug}`,
    })
}

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
    return (
        <ProductDetailsPage />
    )
}